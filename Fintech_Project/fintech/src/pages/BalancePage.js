import React, { useEffect, useState } from 'react'
import HeaderTitle from '../components/News/HeaderTitle'
import axios from 'axios';
import TransactionList from './TransactionList';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import BalanceCard from '../components/Balance/BalanceCard';

const BalancePage = () => {
    const queryParams = useLocation().search;
    const fintechUseNo = queryString.parse(queryParams).fintechUseNo;
    let accessToken = ""
    const [balance, setBalance] = useState("0");
    let [transactionList, setTransactionList] = useState([]);

    useEffect(() => {
        console.log(localStorage.getItem("accessToken"))
        accessToken = localStorage.getItem("accessToken")
        getBalance();
        getTransaction();
    }, [])

    const getTransId = () => {//새로고침을 하면 간간히 length에러가 발생하는데 랜덤난수의 문제로 인해서 발생예상
        const rand = Math.floor(Math.random() * Math.pow(10, 9)) + 1
        const public_code = "M202300432"
        const id = public_code + "U" + rand
        return id;
    };

    const getBalance = () => {
        const sendData = {
            bank_tran_id: getTransId(),
            fintech_use_num: fintechUseNo,
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
            setBalance(data)
        })
    }

    const getTransaction = () => {

        const sendData = {
            bank_tran_id: getTransId(),
            fintech_use_num: fintechUseNo,
            inquiry_type: "A",
            inquiry_base: "D",
            from_date: "20230520",
            to_date: "20230525",
            sort_order: "D",
            tran_dtime: "20230525101921",
        }

        const option = {
            method: "GET",
            url: "v2.0/account/transaction_list/fin_num",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                Authorization: `Bearer ${accessToken}`,
            },
            params: sendData,
        };

        axios(option).then(({ data }) => {
            console.log(data)
            setTransactionList(data.res_list)
        })
    }

    return (
        <div>
            <HeaderTitle title={"계좌 잔액 조회"}></HeaderTitle>
            <BalanceCard
                bankName={balance.bank_name}
                fintechNo={balance.fintech_use_num}
                balance={balance.balance_amt}
            ></BalanceCard>
            <TransactionList transactionList={transactionList}></TransactionList>
        </div>
    )
}

export default BalancePage