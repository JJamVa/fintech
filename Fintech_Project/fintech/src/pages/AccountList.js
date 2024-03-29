import React, { useEffect } from 'react'
import HeaderTitle from '../components/News/HeaderTitle'
import axios from 'axios';
import MainAccountCard from '../components/Main/MainAccountCard';
import { useState } from 'react';

const AccountList = () => {
    let accessToken = "";
    let userSeqNo = "";

    let [accountList, setAccountList] = useState([]);

    useEffect(() => {
        console.log(localStorage.getItem("accessToken"))
        console.log(localStorage.getItem("userSeqNo"))
        accessToken = localStorage.getItem("accessToken")
        userSeqNo = localStorage.getItem("userSeqNo")
        getAccountList();
    }, [])

    const getAccountList = () => {
        const sendData = {
            user_seq_no: userSeqNo
        }

        const option = {
            method: "GET",
            url: "/v2.0/user/me",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                Authorization: `Bearer ${accessToken}`
            },
            params: sendData
        };

        axios(option).then(({ data }) => {
            console.log(data)
            setAccountList(data.res_list)
        })
    }

    return (
        <div>
            <HeaderTitle title={"계좌 목록"}></HeaderTitle>
            {accountList.map((account) => {
                return (
                    <MainAccountCard
                        bankName={account.bank_name}
                        fintechUseNo={account.fintech_use_num}
                    ></MainAccountCard>
                );
            })}
        </div>
    )
}

export default AccountList