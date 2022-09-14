import React, {FC} from 'react';

interface selectProps {
    items: string[],
    onChange: any;
}
const Select: FC<selectProps> = ({items, onChange}) => {

    return (
        <select onChange={onChange}>
            <option value="категория" selected disabled>категория</option>
            {items.map(item =>
                <option value={item}>{item}</option>
            )}
        </select>
    );
};

export default Select;