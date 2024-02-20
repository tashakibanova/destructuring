import { extractSpecialAttacks, character } from './index.js';

test('Функция корректно извлекает все поля атаки, если все поля присутствуют', () => {
    const expectedAttack = {
      id: 8,
      name: 'Двойной выстрел',
      description: 'Двойной выстрел наносит двойной урон',
      icon: 'http://...'
    };
    const actualAttack = extractSpecialAttacks(character)[0];
    expect(actualAttack).toEqual(expectedAttack);
});
  
test('Функция корректно заменяет description на "Описание недоступно", если значение отсутствует', () => {
    const expectedAttack = {
      id: 9,
      name: 'Нокаутирующий удар',
      description: 'Описание недоступно',
      icon: 'http://...'
    };
    const actualAttack = extractSpecialAttacks(character)[1];
    expect(actualAttack).toEqual(expectedAttack);
});
  
  