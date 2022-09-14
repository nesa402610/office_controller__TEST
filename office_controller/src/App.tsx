import React, {FC, useState} from 'react';
import './App.css'
import Select from "./UI/select";
import CoursesCheckboxes from "./componenets/coursesCheckboxes";
import CoursesFields from "./componenets/coursesFields";


const App: FC = () => {
    const selectValues = ['Курсы', 'Проекты', "Работа", "Недвижимость"]
    const [category, setCategory] = useState<string>('')
    const [invest,setInvest] = useState<boolean>(false)
    const [partner,setPartner] = useState<boolean>(false)
    const [money, setMoney] = useState<boolean>(false)

    return (
        <div className={'container'}>
            <form className={'form'}>
                <div className={'form__head'}>
                    <input type="text" placeholder={'название'}/>
                    <input type="text" placeholder={'стоимость'}/>
                    <Select onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setCategory(e.target.value)} items={selectValues}/>
                </div>
                {category === 'Проекты' ?
                    <CoursesCheckboxes setPartner={setPartner} invest={invest} partner={partner} setInvest={setInvest} money={money} setMoney={setMoney}/>
                    : null
                }
                <h2>Описание</h2>
                <div className={'form__describe'}>
                    <div className={'form__describe__el'}>
                        <div className={'form__describe__svg'}>
                        </div>
                        <div className={'form__describe__block'}>
                            <h4 className={'form__block__head'}>свойства и детали</h4>
                            <div className={'form__describe__subtitle'}>
                                <span className={'subtitle'}>например, квадратура, размеры и т.д.</span>
                                <span>Сначала выберите категорию</span>
                            </div>
                            {category === 'Проекты' ?
                            <CoursesFields/>
                                : null
                            }
                        </div>
                    </div>
                    <div className={'form__describe__el'}>
                        <div className={'form__describe__svg'}>

                        </div>
                        <div className={'form__describe__block'}>
                            <input type="text" className={'linkInput'} placeholder={'ссылка на видео'}/>
                        </div>
                    </div>
                    <div className={'form__describe__el'}>
                        <div className={'form__describe__svg'}>

                        </div>
                        <div className={'form__describe__block'}>
                            <label>
                                <input hidden type="file"/>
                                Загрузите картинку</label>
                        </div>
                    </div>
                    <textarea>

                    </textarea>
                </div>
                <div className={'form__checkbox'}>
                    <label htmlFor="">Комментарии разрешены</label>
                    <input type="checkbox"/>
                </div>
            </form>
        </div>
    );
};

export default App;