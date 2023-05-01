describe ('Тестирование навигационного меню', function(){
    it('Переход по категории "Акции"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Акции')
          .click()
          .get('.sc-iqHYmW > .sc-bdfBQB').contains('Бонусы и акции')
    })

    it('Переход по категории "Скидки"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB').contains('Скидки')
          .click()
          .get(':nth-child(14) > .sc-iJuVqt > .sc-ezredP > .sc-giImIA')
          .contains('Ограничение контента')
    })

    it('Переход по категории "Готовая еда"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB').contains('Готовая еда')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Готовая еда')
    })

    it('Переход по категории "Все на дачу"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Все на дачу')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Все на дачу')
    })

    it('Переход по категории "От перекрёстка"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('От Перекрёстка')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'От Перекрёстка')
    })

    it('Переход по категории "Молоко, сыр, яйца"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Молоко, сыр, яйца')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Молоко, сыр, яйца')
    })

    it('Переход по категории "Овощи, фрукты, грибы"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Овощи, фрукты, грибы')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Овощи, фрукты, грибы')
    })

    it('Переход по категории "Макароны, крупы, масло, специи"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Макароны, крупы, масло, специи')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Макароны, крупы, масло, специи')
    })

    it('Переход по категории "Шоколад, конфеты, сладости"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Шоколад, конфеты, сладости')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Шоколад, конфеты, сладости')
    })


    it('Переход по категории "Соки, воды, напитки"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Соки, воды, напитки')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Соки, воды, напитки')
    })

    it('Переход по категории "Хлеб и выпечка"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Хлеб и выпечка')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Хлеб и выпечка')
    })

    it('Переход по категории "Мясо и птица"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Мясо и птица')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Мясо и птица')
    })

    it('Переход по категории "Колбасные изделия"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Колбасные изделия')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Колбасные изделия')
    })

    it('Переход по категории "Рыба"', function(){
        cy.visit('https://www.perekrestok.ru/')

         //Кликаем на стрелочку слайдера, чтобы проматать список категоричй, потому что она закрыват собой нужный нам элемент
        cy.get('.tab-carousel__button_next > .sc-fWPcWZ').click()
        cy.get('.tab-carousel__button_next > .sc-fWPcWZ').click()
        cy.get('.tab-carousel__button_next > .sc-fWPcWZ').click()

        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Рыба')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Рыба')
    })

    it('Переход по категории "Замороженные продукты"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Замороженные продукты')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Замороженные продукты')
    })

    it('Переход по категории "Морепродукты"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Морепродукты')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Морепродукты')
    })

    it('Переход по категории "Товары для мам и детей"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Товары для мам и детей')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Товары для мам и детей')
    })

    it('Переход по категории "Соусы, кетчупы, майонезы"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Соусы, кетчупы, майонезы')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Соусы, кетчупы, майонезы')
    })

    it('Переход по категории "Кофе, чай, какао, сахар"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Кофе, чай, какао, сахар')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Кофе, чай, какао, сахар')
    })

    it('Переход по категории "Сухие завтраки, мюсли"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Сухие завтраки, мюсли')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Сухие завтраки, мюсли')
    })

    it('Переход по категории "Продукты быстрого приготовления"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Продукты быстрого приготовления')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Продукты быстрого приготовления')
    })

    it('Переход по категории "Консервация"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Консервация')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Консервация')
    })

    it('Переход по категории "Мёд, варенье, джемы, сиропы"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Мёд, варенье, джемы, сиропы')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Мёд, варенье, джемы, сиропы')

    })

    it('Переход по категории "Орехи, семечки, сухофрукты"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Орехи, семечки, сухофрукты')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Орехи, семечки, сухофрукты')

    })

    it('Переход по категории "Зоотовары"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Зоотовары')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Зоотовары')

    })

    it('Переход по категории "Красота, гигиена, аптека"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Красота, гигиена, аптека')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Красота, гигиена, аптека')

    })

    it('Переход по категории "Уборка"', function(){
        cy.visit('https://www.perekrestok.ru/')
        
        //Кликаем на стрелочку слайдера, чтобы проматать список категоричй, потому что она закрыват собой нужный нам элемент
        cy.get('.tab-carousel__button_next > .sc-fWPcWZ').click()
        cy.get('.tab-carousel__button_next > .sc-fWPcWZ').click()
        cy.get('.tab-carousel__button_next > .sc-fWPcWZ').click()

        cy.get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Уборка')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Уборка')

    })


    it('Переход по категории "Посуда"', function(){
        cy.visit('https://www.perekrestok.ru/')

          //Кликаем на стрелочку слайдера, чтобы проматать список категоричй, потому что она закрыват собой нужный нам элемент
          cy.get('.tab-carousel__button_next > .sc-fWPcWZ').click()
          cy.get('.tab-carousel__button_next > .sc-fWPcWZ').click()
          cy.get('.tab-carousel__button_next > .sc-fWPcWZ').click()
          
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Посуда')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Посуда')

    })

    it('Переход по категории "Для дома и дачи"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Для дома и дачи')
          .click()
          .get('.catalog-category__title')
          .should('have.text', 'Для дома и дачи')

    })

    it('Переход по категории "Алкогольные напитки"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Алкогольные напитки')
          .click()
          .get('.adult-modal-wrapper')
          .contains('Ограничение контента')
    })

    it('Переход по категории "Системы нагревания, табак"', function(){
        cy.visit('https://www.perekrestok.ru/')
          .get('.sc-dwcupg > .sc-bdfBQB')
          .contains('Системы нагревания, табак')
          .click()
          .get('.adult-modal-wrapper')
          .contains('Ограничение контента')
    })
})
