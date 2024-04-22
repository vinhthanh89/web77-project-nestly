import joi from 'joi'

// "city": "New York",
const cityValidate = joi.string().required().messages({
    "string.base" : "City phải là dạng dữ liệu string" ,
    "any.required" : "Xin hãy nhập thành phố"
})
// "district": "Manhattan",
const districtValidate = joi.string().required().messages({
    "string.base" : "District phải là dạng dữ liệu string" ,
    "any.required" : "Xin hãy nhập thành phố"
})
// "address": "123 Main St",
const addressValidate = joi.string().required().messages({
    "string.base" : "Address phải là dạng dữ liệu string" ,
    "any.required" : "Xin hãy nhập thành phố"
})
// "area": 750,
const areaValidate = joi.number().required().messages({
    "number.base" : "area phải là dạng dữ liệu number" ,
    "any.required" : "Xin hãy nhập thành phố"
})
// "numberOfBedrooms": 2,
const numberOfBedroomsValidate = joi.number().required().messages({
    "number.base" : "number of bedroom phải là dạng dữ liệu number" ,
    "any.required" : "Xin hãy nhập thành phố"
})
// "rentPrice": 2000,
const rentPrice = joi.number().required().messages({
    "number.base" : "rentPrice phải là dạng dữ liệu number" ,
    "any.required" : "Xin hãy nhập thành phố"
})
// "images": ["image1.jpg", "image2.jpg", "image3.jpg"],
// "description": "Cozy apartment in the heart of Manhattan",
const descriptionValidate = joi.string().messages({
    "string.base" : "description phải là dạng dữ liệu string" ,
})
// "type": "apartment",
// "owner": "user1_id",
// "isRentBy": "userId"