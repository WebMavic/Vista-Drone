"use client"
import { useState } from "react"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


export const PhoneNumberInput = ()=>{
    const [phone,setPhone] = useState<string>()
    return (
        <PhoneInput autoComplete="tel" 
        placeholder="Enter phone number" limitMaxLength
        value={phone} className="col-span-1 inputs"
        onChange={setPhone}/>
    )
}