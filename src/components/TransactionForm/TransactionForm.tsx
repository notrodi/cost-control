import { useState } from 'react';
import { getCategoryColor, getCategoryTitle } from '../../functions';
import { ExpenseCategory, IncomeCategory, TransactionType } from '../../types';
import './TransactionForm.scss';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { toggleTransaction } from '../../store/transactions/transactions.slice';
import { v4 } from 'uuid';
import { decrementBalance, incrementBalance } from '../../store/balance/balance.slice';

export default function TransactionForm() {
  const FORM_DEFAULT_VALUE = {
    value: '',
    category: '',
    description: '',
    date: new Date().toISOString().slice(0, 16)
  }

  const [tab, setTab] = useState(TransactionType.Expense);
  const [form, setForm] = useState(FORM_DEFAULT_VALUE);
  const [formErrors, setFormErrors] = useState({
    value: false,
    category: false,
  });

  const dispatch = useDispatch<AppDispatch>();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const hasError = {
      value: form.value.trim() === '' || Number(form.value) <= 0,
      category: form.category.trim() === '',
    };

    setFormErrors(hasError);

    if (hasError.value || hasError.category) {
      return;
    }

    const newTransaction = {
      ...form,
      id: v4(),
      type: tab,
      date: form.date,
      value: (Number(form.value))
    }

    dispatch(toggleTransaction(newTransaction));

    tab === TransactionType.Expense ?
      dispatch(decrementBalance(form.value)) :
      dispatch(incrementBalance(form.value));

    setForm(FORM_DEFAULT_VALUE);
  }
  
  return (
    <>
      <div className="transaction-form__tab">
        <div
          className={ tab === TransactionType.Expense ?
            'transaction-form__tab-item transaction-form__tab-item_active' :
            'transaction-form__tab-item' }
          onClick={ () => setTab(TransactionType.Expense) } >
          Расход
        </div>
        <div
          className={ tab === TransactionType.Income ?
            'transaction-form__tab-item transaction-form__tab-item_active' :
            'transaction-form__tab-item' }
          onClick={ () => setTab(TransactionType.Income) } >
          Поступление
        </div>
      </div>
      <form
        className="transaction-form"
        onSubmit={ handleSubmit } >
        <div className="transaction-form__item">
          <label
            className="transaction-form__label"
            htmlFor="value">Сумма</label>
          <input
            className= {
              !formErrors.value ?
                'transaction-form__input' :
                'transaction-form__input transaction-form__input_error'
            }
            id="value"
            type="number"
            step="0.01"
            placeholder={
              tab === TransactionType.Expense ?
                '-0.00' :
                '+0.00'
            }
            // placeholder='-0.00'
            value={ form.value }
            onChange={(event) => {
              const raw = event.target.value;

              if (raw === '' || /^\d+(\.\d{0,2})?$/.test(raw)) {
                setForm((prev) => ({ ...prev, value: raw }));

                if (raw !== '' && Number(raw) > 0) {
                  setFormErrors((prev) => ({ ...prev, value: false }));
                } else {
                  setFormErrors((prev) => ({ ...prev, value: true }));
                }
              }
            }}/>
        </div>

        <div className="transaction-form__item">
          <label
            className="transaction-form__label"
            htmlFor="category">Категория</label>
            <div className="transaction-form__category">
              <div
                className="transaction-form__category__icon"
                style={{ 
                  background: form.category
                    ? getCategoryColor(form.category as ExpenseCategory)
                    : '#e5e5e5'
                }} >
                <img src={ form.category
                  ? `/categories/icon-${form.category}.svg`
                  : '/categories/icon-question.svg' } alt="icon" />
              </div>
              <select
                className= {
                  !formErrors.category ?
                    'transaction-form__input' :
                    'transaction-form__input transaction-form__input_error'
                }
                id="category"
                value={ form.category }
                onChange={(event) => {
                  const selected = event.target.value as ExpenseCategory;
                  setForm((prev) => ({ ...prev, category: selected }));

                  if (selected) {
                    setFormErrors((prev) => ({ ...prev, category: false }));
                  }
                }} >
                <option value="" hidden>Выберете категорию</option>
                {
                  tab === TransactionType.Expense ?
                    Object.values(ExpenseCategory)
                      .map(category => <option key={ category } value={ category }>{ getCategoryTitle(category) }</option>) :
                    Object.values(IncomeCategory)
                      .map(category => <option key={ category } value={ category }>{ getCategoryTitle(category) }</option>)
                }
              </select>
            </div>
        </div>

        <div className="transaction-form__item">
          <label
            className="transaction-form__label"
            htmlFor="description">Описание</label>
          <input
            className="transaction-form__input"
            id="description"
            type="text"
            value={ form.description }
            onChange={ (event) => setForm(prev => ({ ...prev, description: event.target.value })) } />
        </div>

        <div className="transaction-form__item">
          <label
            className="transaction-form__label"
            htmlFor="date">Дата и время</label>
          <input
            className="transaction-form__input"
            id="date"
            type="datetime-local"
            value={ form.date }
            onChange={ (event) => setForm(prev => ({ ...prev, date: event.target.value })) } />
        </div>
        
        <button
          className='transaction-form__button'
          type='submit' >
            Добавить
        </button>
      </form>
    </>
  )
}