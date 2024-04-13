export const validateData = (dataBody , schemaData) => {
    const validate = schemaData.validate(dataBody)

    if(validate.error){
        return validate.error.details[0].message
    }

    return null
}