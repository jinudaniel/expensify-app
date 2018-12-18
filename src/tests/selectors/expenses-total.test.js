import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});

test('should correctly add a single expense', () => {
    const total = selectExpensesTotal([expenses[1]]);
    expect(total).toBe(109500);
});

test('should correctly add multiple expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(114195);
});
