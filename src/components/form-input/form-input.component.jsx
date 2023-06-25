import {GroupContainer, Input, FormInputLabel, FormInputLabelShrink} from "./form-input.styles";
function getFormLabel(type){
    return{
        'base': FormInputLabel,
        'shrink': FormInputLabelShrink
    }[type]

}
function FormInput({label, ...otherProps}){
    const InputLabel = getFormLabel(otherProps.value.length ? 'shrink'  : 'base')

    return(
        <GroupContainer>
        <Input
            {...otherProps}
        />
            {label
                &&
            <InputLabel className = 'form-input-label'>{label}</InputLabel>
            }

        </GroupContainer>
    )
}


export default FormInput