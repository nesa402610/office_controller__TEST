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
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 22 22" fill="none">
                            <rect x="0.5" y="0.5" width="21" height="21" rx="1.5" stroke="#acacac"></rect>
                            <path d="M4.00245 14C4.00245 14.2652 4.10781 14.5196 4.29534 14.7071C4.48288 14.8946 4.73723 15 5.00245 15C5.26767 15 5.52202 14.8946 5.70956 14.7071C5.89709 14.5196 6.00245 14.2652 6.00245 14C6.00245 13.7348 5.89709 13.4804 5.70956 13.2929C5.52202 13.1054 5.26767 13 5.00245 13C4.73723 13 4.48288 13.1054 4.29534 13.2929C4.10781 13.4804 4.00245 13.7348 4.00245 14ZM4.00245 16.83C3.41692 16.6234 2.90988 16.2403 2.55124 15.7334C2.1926 15.2265 2 14.6209 2 14C2 13.3791 2.1926 12.7735 2.55124 12.2666C2.90988 11.7597 3.41692 11.3766 4.00245 11.17L4.00245 4C4.00245 3.73478 4.10781 3.48043 4.29534 3.29289C4.48288 3.10536 4.73723 3 5.00245 3C5.26767 3 5.52202 3.10536 5.70956 3.29289C5.89709 3.48043 6.00245 3.73478 6.00245 4L6.00245 11.17C6.58798 11.3766 7.09502 11.7597 7.45366 12.2666C7.81231 12.7735 8.0049 13.3791 8.0049 14C8.0049 14.6209 7.81231 15.2265 7.45366 15.7334C7.09502 16.2403 6.58798 16.6234 6.00245 16.83V18C6.00245 18.2652 5.89709 18.5196 5.70956 18.7071C5.52202 18.8946 5.26767 19 5.00245 19C4.73723 19 4.48288 18.8946 4.29534 18.7071C4.10781 18.5196 4.00245 18.2652 4.00245 18V16.83ZM10.0025 8C10.0025 8.26522 10.1078 8.51957 10.2953 8.70711C10.4829 8.89464 10.7372 9 11.0025 9C11.2677 9 11.522 8.89464 11.7096 8.70711C11.8971 8.51957 12.0025 8.26522 12.0025 8C12.0025 7.73478 11.8971 7.48043 11.7096 7.29289C11.522 7.10536 11.2677 7 11.0025 7C10.7372 7 10.4829 7.10536 10.2953 7.29289C10.1078 7.48043 10.0025 7.73478 10.0025 8ZM10.0025 10.83C9.41692 10.6234 8.90988 10.2403 8.55124 9.7334C8.1926 9.22654 8 8.62091 8 8C8 7.37909 8.1926 6.77346 8.55124 6.2666C8.90988 5.75974 9.41692 5.3766 10.0025 5.17V4C10.0025 3.73478 10.1078 3.48043 10.2953 3.29289C10.4829 3.10536 10.7372 3 11.0025 3C11.2677 3 11.522 3.10536 11.7096 3.29289C11.8971 3.48043 12.0025 3.73478 12.0025 4V5.17C12.588 5.3766 13.095 5.75974 13.4537 6.2666C13.8123 6.77346 14.0049 7.37909 14.0049 8C14.0049 8.62091 13.8123 9.22654 13.4537 9.7334C13.095 10.2403 12.588 10.6234 12.0025 10.83V18C12.0025 18.2652 11.8971 18.5196 11.7096 18.7071C11.522 18.8946 11.2677 19 11.0025 19C10.7372 19 10.4829 18.8946 10.2953 18.7071C10.1078 18.5196 10.0025 18.2652 10.0025 18V10.83ZM16.0025 14C16.0025 14.2652 16.1078 14.5196 16.2953 14.7071C16.4829 14.8946 16.7372 15 17.0025 15C17.2677 15 17.522 14.8946 17.7096 14.7071C17.8971 14.5196 18.0025 14.2652 18.0025 14C18.0025 13.7348 17.8971 13.4804 17.7096 13.2929C17.522 13.1054 17.2677 13 17.0025 13C16.7372 13 16.4829 13.1054 16.2953 13.2929C16.1078 13.4804 16.0025 13.7348 16.0025 14ZM16.0025 16.83C15.4169 16.6234 14.9099 16.2403 14.5512 15.7334C14.1926 15.2265 14 14.6209 14 14C14 13.3791 14.1926 12.7735 14.5512 12.2666C14.9099 11.7597 15.4169 11.3766 16.0025 11.17V4C16.0025 3.73478 16.1078 3.48043 16.2953 3.29289C16.4829 3.10536 16.7372 3 17.0025 3C17.2677 3 17.522 3.10536 17.7096 3.29289C17.8971 3.48043 18.0025 3.73478 18.0025 4V11.17C18.588 11.3766 19.095 11.7597 19.4537 12.2666C19.8123 12.7735 20.0049 13.3791 20.0049 14C20.0049 14.6209 19.8123 15.2265 19.4537 15.7334C19.095 16.2403 18.588 16.6234 18.0025 16.83V18C18.0025 18.2652 17.8971 18.5196 17.7096 18.7071C17.522 18.8946 17.2677 19 17.0025 19C16.7372 19 16.4829 18.8946 16.2953 18.7071C16.1078 18.5196 16.0025 18.2652 16.0025 18V16.83Z" fill="#acacac"></path>
                        </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 18 18" fill="none">
                            <path d="M8.05 12.5L12.2 9.85C12.35 9.75 12.4667 9.625 12.55 9.475C12.6333 9.325 12.675 9.16667 12.675 9C12.675 8.83333 12.6333 8.675 12.55 8.525C12.4667 8.375 12.35 8.25 12.2 8.15L8.05 5.5C7.71667 5.26667 7.375 5.25 7.025 5.45C6.675 5.65 6.5 5.94167 6.5 6.325V11.675C6.5 12.0583 6.675 12.35 7.025 12.55C7.375 12.75 7.71667 12.7333 8.05 12.5V12.5ZM2 18C1.45 18 0.979 17.8043 0.587 17.413C0.195667 17.021 0 16.55 0 16V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H16C16.55 0 17.021 0.195667 17.413 0.587C17.8043 0.979 18 1.45 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.021 17.8043 16.55 18 16 18H2Z" fill="#acacac"></path>
                        </svg>
                        <div className={'form__describe__block'}>
                            <input type="text" className={'linkInput'} placeholder={'ссылка на видео'}/>
                        </div>
                    </div>
                    <div className={'form__describe__el'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 16 14" fill="none">
                            <path d="M6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5V4.5Z" fill="#acacac"></path>
                            <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H14C14.5304 14 15.0391 13.7893 15.4142 13.4142C15.7893 13.0391 16 12.5304 16 12V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0H2V0ZM14 1C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V8.5L11.223 6.553C11.1292 6.50602 11.023 6.48973 10.9195 6.50642C10.8159 6.52311 10.7203 6.57194 10.646 6.646L6.936 10.356L4.276 8.584C4.17996 8.52006 4.06476 8.4913 3.94994 8.5026C3.83512 8.5139 3.72773 8.56456 3.646 8.646L1 11V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H14Z" fill="#acacac"></path>
                        </svg>
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