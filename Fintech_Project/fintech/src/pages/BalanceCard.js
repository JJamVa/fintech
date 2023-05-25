import React, { useEffect, useState } from 'react'
import HeaderTitle from '../components/News/HeaderTitle'
import axios from 'axios';


const BalanceCard = () => {
    let accessToken = ""
    let [leftMoney, setLeftMoney] = useState("");
    let [bankName, setBankName] = useState("");
    let [fintechUseNum, setFintechUseNum] = useState("");

    useEffect(() => {
        console.log(localStorage.getItem("accessToken"))
        accessToken = localStorage.getItem("accessToken")
        getBalance();
    }, [])

    const getBalance = () => {
        const public_code = "M202300432"
        const rand = Math.floor(Math.random() * Math.pow(10, 9))

        const sendData = {
            bank_tran_id: public_code + "U" + rand.toString(),
            fintech_use_num: "120230043288951030866214",
            tran_dtime: "20230525101010"
        }

        const option = {
            method: "GET",
            url: "/v2.0/account/balance/fin_num",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                Authorization: `Bearer ${accessToken}`
            },
            params: sendData
        };

        axios(option).then(({ data }) => {
            console.log(data)
            setLeftMoney(data.balance_amt)
            setBankName(data.bank_name)
            setFintechUseNum(data.fintech_use_num)
        })
    }




    return (
        <div>
            <HeaderTitle title={"계좌 잔액 조회"}></HeaderTitle>
            <p>{bankName}</p>
            <p>{leftMoney}</p>
            <p>{fintechUseNum}</p>
        </div>
    )
}

export default BalanceCard