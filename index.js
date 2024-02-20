export const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
}

export function extractSpecialAttacks(character) {
return character.special.map(attack => {
      return {
        id: attack.id,
        name: attack.name,
        description: attack.description || 'Описание недоступно',
        icon: attack.icon
      };
    });
}

  
  
  