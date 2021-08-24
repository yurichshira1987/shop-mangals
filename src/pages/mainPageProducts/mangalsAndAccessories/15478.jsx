import MainProduct from "../../../components/mainPageProduct"
import '../mainPageProducts.scss'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import State from '../../../redux/state'
import Actions from '../../../redux/actions'

const Product15478 = () => {

    const productData = {
        title:'Мангал ВИТЯЗЬ с печкой под казан, крышкой-гриль и решеткой (2021)',
        code: 15478,
        panelList: [
            { title: 'ОПИСАНИЕ', content: description },
            { title: 'ХАРАКТЕРИСТИКИ', content: null },
            { title: 'ОТЗЫВЫ', content: reviews },
        ],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Мангалы с крышей', path: '/category/mangali/s-krishey/', active: false },
            { title: 'Мангал ВИТЯЗЬ с печкой под казан, крышкой-гриль и решеткой (2021)', path: '/', active: true },
        ]
    }

    return (
        <div className='main-page-product'>
            <MainProduct productData={productData} />
        </div >
    )
}

const description = () => {
    return (
        <div className='productPanelInfo'>
            <div className='redBold'>Акция! Доставка по Москве и Московской области - Бесплатно</div>
            <div className='redBold'>Крышка для печи в подарок! </div>
            <p><strong>Мангал ВИТЯЗЬ с печкой под казан, крышкой-гриль и решеткой - </strong>это многофункциональный и практичный барбекю комплекс 3в1, сочетающий в себе классический мангал, угольный гриль и печь для казана. Уютно впишется в ландшафт любой дачи или загородного дома</p>
            <p>Обновлённая модель 2021 года. Что улучшили?</p>
            <ol>
                <li>Соединили боковые стойки перемычками, тем самым устранили шаткость конструкции</li>
                <li>Увеличили длину дымохода, сделали его выше крыши. (Теперь дым из трубы не скапливается под крышей)</li>
            </ol>
            <p><strong>Габаритные размеры в собранном состоянии:</strong></p>
            <ul>
                <li>Длина по фасаду: 200 см</li>
                <li>Ширина (глубина): 110 см</li>
                <li>Высота: 235 см</li>
            </ul>
            <p>Конструкция изготовлена из квадратной трубы, сечением 20*20 мм, крыша из листового металла толщиной 1 мм. Вся металлическая часть покрыта термостойкой матовой эмалью CERTA (выдерживает до 1000 градусов)</p>
            <p>В мангальном комплексе имеется большой стол для комфортной работы повара, а также полки для хранения кухонного инвентаря. Под жаровней удобно разместить дрова и уголь</p>
            <p><strong>Жаровня мангала</strong></p>
            <p>Вы можете выбрать один из двух типов жаровни</p>
            <ol>
                <li>Классическая - с отверстиями для поддува на передней и задней стенке. Рабочие размеры жаровни 100*35 см, глубина 17 см, сверху 13 прорезей для шампуров. Можно выбрать толщина стали 3 или 5 мм (стенки и дно)</li>
                <li>С ящиками-зольниками. Здесь нет отверстий для поддува как на классической жаровне, но есть колосник (перфорированное дно) и выдвижные ящики (зольники). В них попадает мелкая зола после прогорания углей, также открывая/закрывая ящик можно регулировать приток воздуха для поддува. Рабочие размеры жаровни 100 * 35 см, глубина 15 см. Вес жаровни: 54 кг</li>
            </ol>
            <p><strong>Гриль</strong></p>
            <p>Жаровня мангала, оснащена крышкой и пятью решетками для гриля.</p>
            <p>С их помощью классический шашлык приготовится быстрее и будет более сочным. Готовьте стейки, овощи, грибы, подкопченное мясо, рыбу и многое другое.</p>
            <p>Решетка изготовлена из стального квадратного прутка 10*10 мм (можно заменить на нержавейку с доплатой). Размер одной решетки 360*20 мм.</p>
            <p>В верхней части крышке предусмотрен клапан для стравливания лишнего дыма, а также датчик для контроля температуры приготовления.</p>
            <p>Крышка-барбекю, снимается и устанавливается за секунды, но даже не снимая ее, вы сможете готовить на шампурах как на обычном мангале.</p>
            <p><strong>Печь для казана</strong></p>
            <p>Печь для казана изготовлена с учетом всех замечаний наших покупателей и большого опыта приготовления различных блюд в казане.</p>
            <p>Здесь есть:</p>
            <ol>
                <li>Труба с "грибком" – труба обеспечит хорошую тягу, а грибок защитит от попадания осадков в печь.</li>
                <li>Заслонка (шибер) - находится в отводе под трубу, перекрывает тягу, когда необходимо поддержание минимального горения.</li>
                <li>Колосник – находится внутри печи, нужен для подачи кислорода, в камеру горения, а также для отвода золы.</li>
                <li>Зольник – очень важный элемент, необходим для регулировки тяги и интенсивности горения. Так же необходим для сбора золы. Обратите внимание, что некоторые производители делают этот элемент в виде дверцы-поддувала, что существенно сужает функциональность. Как минимум, чтобы удалить золу придётся переворачивать печь</li>
            </ol>
            <ul>
                <li>Размер печи: 37*37 см</li>
                <li>Высота: 44 см</li>
                <li>Диаметр отверстия для казана: 36 см</li>
                <li>Толщина стали: 3 мм (можно 5 мм с доплатой)</li>
                <li>Длина дымохода 2 метра</li>
                <li>Высота дымохода от пола 2,6 метра</li>
                <li>Колосник из стального квадратного прутка 10*10 мм</li>
                <li>Печь покрыта термостойкой матовой эмалью CERTA, выдерживает до +1000 градусов</li>
            </ul>
            <p>Если у Вас нет казана, то мы рекомендуем чугунный казан на 12 литров производства Узбекистан</p>
            <p>Почему?</p>
            <ol>
                <li>Он идеально подходит для этой печи (погружается в печь на 2/3)</li>
                <li>В большом казане удобнее готовить как для одного человека, так и на большую компанию.</li>
                <li>Толщина стенок 8 мм</li>
                <li>Гладкая внутренняя поверхность, без раковин и наплывов</li>
                <li>Лучшее соотношение по цене/качество</li>
            </ol>
            <p>Заказать можно <NavLink to='/kazan-chugun-12-uzbek-ploskoe-dno'>здесь</NavLink></p>
            <hr></hr>
            <p><strong>Что входит в комплект?:</strong></p>
            <ul>
                <li>Основание под печь для казана</li>
                <li>Основание под жаровня мангала</li>
                <li>Правый стол</li>
                <li>Стойки под крышу</li>
                <li>Крыша (дуги + 3 метал.листа)</li>
                <li>Жаровня</li>
                <li>Печь для казана (колосник,зольник, дымоход)</li>
                <li>Крышка-Барбекю (крепления, клапан, термометр, ручка фиксатор)</li>
                <li>5 решеток для гриля</li>
            </ul>
        </div>
    )
}

const reviews = () => {
    return (
        <div className='productPanelInfo__comments'>
            <div>Оставьте ваш отзыв первым</div>
            <p>Чтобы добавить отзыв, пожалуйста, <NavLink to='/signup'>зарегистрируйтесь</NavLink> или <NavLink to='/login'>войдите</NavLink></p>
        </div>
    )
}

export default connect(State, Actions)(Product15478)