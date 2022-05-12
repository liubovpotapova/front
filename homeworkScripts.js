let UserCatName = prompt("А как зовут вашего пирожочка?, Введите имя туть:3 ");
// if (UserCatName == Рыжий) {
//     alert( 'Опа, тезки!' );
//    } else {
//     alert( `Эй, ${UserCatName}, кажется твой хуман настоящий пончик` );
//    }

// let a = UserCatName;
   switch (UserCatName) {
    case 'Рыжий':
    alert( 'О, тезка!' );
    break;
    case 'Барсик':
    alert( 'Хороший мальчик!' );
    break;
    case 'Васька':
    alert( 'Свой парень!' );
    break;
    default:
    alert( `Эй, ${UserCatName}, кажется твой хуман настоящий пончик` );
   } 