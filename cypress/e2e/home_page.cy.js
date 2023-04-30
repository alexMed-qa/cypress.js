
describe('Тестирование главной перекрестка', function () {
   it('Проверка содержания выпадающего списка при наведении на "Каталог"', function () {
        cy.visit('https://www.perekrestok.ru/').contains('Перекрёсток')
        cy.get('.sc-dkAqVg').should('have.text', 'Каталог')
        cy.get('.sc-dkAqVg').trigger('mouseover')
        cy.get('.catalog-menu__content').contains('Все на дачу').click()
        cy.get('.catalog-category__title').should('have.text', 'Все на дачу')
    })

    it('Проверка перехода по категориям в навигационном меню', function() {
        cy.visit('https://www.perekrestok.ru/').contains('Перекрёсток')

        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Акции')
          .click()
          .wait(3000)
          .get('.sc-iqHYmW > .sc-bdfBQB').contains('Бонусы и акции')


        cy.get('.sc-dwcupg > .sc-bdfBQB').contains('Скидки')
          .click()
          .wait(3000)
          .get(':nth-child(14) > .sc-iJuVqt > .sc-ezredP > .sc-giImIA')
          .contains('Ограничение контента')


        cy.get('.sc-dwcupg > .sc-bdfBQB').contains('Готовая еда')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Готовая еда')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Все на дачу')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Все на дачу')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('От Перекрёстка')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'От Перекрёстка')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Молоко, сыр, яйца')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Молоко, сыр, яйца')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Овощи, фрукты, грибы')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Овощи, фрукты, грибы')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Макароны, крупы, масло, специи')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Макароны, крупы, масло, специи')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Шоколад, конфеты, сладости')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Шоколад, конфеты, сладости')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Соки, воды, напитки')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Соки, воды, напитки')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Хлеб и выпечка')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Хлеб и выпечка')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Мясо и птица')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Мясо и птица')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Колбасные изделия')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Колбасные изделия')

        //Кликаем на стрелочку слайдера, чтобы проматать список категоричй, потому что она закрыват собой нужный нам элемент
        cy.get('.tab-carousel__button_next > .sc-fWPcWZ').click()


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Рыба')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Рыба')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Замороженные продукты')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Замороженные продукты')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Морепродукты')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Морепродукты')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Товары для мам и детей')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Товары для мам и детей')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Соусы, кетчупы, майонезы')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Соусы, кетчупы, майонезы')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Кофе, чай, какао, сахар')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Кофе, чай, какао, сахар')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Сухие завтраки, мюсли')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Сухие завтраки, мюсли')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Продукты быстрого приготовления')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Продукты быстрого приготовления')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Консервация')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Консервация')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Здоровье')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Здоровье')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Орехи, семечки, сухофрукты')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Орехи, семечки, сухофрукты')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Мёд, варенье, джемы, сиропы')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Мёд, варенье, джемы, сиропы')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Зоотовары')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Зоотовары')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Красота, гигиена, аптека')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Красота, гигиена, аптека')


        //Кликаем на стрелочку слайдера, чтобы проматать список категоричй, потому что она закрыват собой нужный нам элемент
        cy.get('.tab-carousel__button_next > .sc-fWPcWZ').click()

    
        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Уборка')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Уборка')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Посуда')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Посуда')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Для дома и дачи')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .should('have.text', 'Для дома и дачи')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Алкогольные напитки')
          .click()
          .wait(3000)
        cy.get('.adult-modal-wrapper')
          .contains('Ограничение контента')
          .get('.fniAzO > .button-children')
          .click()
          .get('[itemtype="https://schema.org/Organization"]')
          .contains('Зелёная линия')


        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Системы нагревания, табак')
          .click()
          .wait(3000)
          .get('.catalog-category__title')
          .contains('Системы нагревания, табак')
    })
})
