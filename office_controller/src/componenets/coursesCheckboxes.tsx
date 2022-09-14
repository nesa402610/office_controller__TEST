import React, {FC} from 'react';

interface coursesCheckboxesProps {
    invest: boolean;
    partner: boolean;
    money: boolean;
    setMoney: any
    setPartner: any
    setInvest: any
}

const CoursesCheckboxes: FC<coursesCheckboxesProps> = ({invest, partner, money, setMoney, setPartner, setInvest}) => {
    return (
        <div className={'courses__checkboxes'}>
            <label>
                <input type="checkbox" onChange={() => setInvest(!invest)}/>
                Ищу инвестиции
            </label>
            <label>
                <input type="checkbox" onChange={() => setPartner(!partner)}/>
                Ищу партнера
            </label>
            <label>
                <input type="checkbox" onChange={() => setMoney(!money)}/>
                Вложу
            </label>
        </div>
    );
};

export default CoursesCheckboxes;