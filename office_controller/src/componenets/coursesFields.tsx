import React, {FC} from 'react';

const CoursesFields: FC = () => {
    return (
        <div className={'form__describe__fields'}>
            <div className={'fields__el'}>
                <label>Отрасль</label>
                <input type="text"/>
            </div>
            <div className={'fields__el'}>
                <label>Местоположение</label>
                <input type="text"/>
            </div>
            <div className={'fields__el'}>
                <label>Стадия проекта</label>
                <input type="text"/>
            </div>
            <div className={'fields__el'}>
                <label>Срок реализация</label>
                <input type="text"/>
            </div>
            <div className={'fields__el'}>
                <label>Срок окупаемости</label>
                <input type="text"/>
            </div>
        </div>
    );
};

export default CoursesFields;