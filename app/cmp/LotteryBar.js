"use client"
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import DepositorABI from './ABI/ABIdepositor.json'


const LotteryBar = () => {

    const [timeValue, setTimeValue] = useState('0');
    const [index, setIndex] = useState('0');
    const [winner, setWinner] = useState('No winner yet!');
    const [showModal, setShowModal] = useState(false);
    const [contractForFront, setContractForFront] = useState('0x0000000000000000000000000000000000000000')

    const fetchVariableValue = async () => {
        try {
            const response = await fetch('http://localhost:3001/getInfos');
            const data = await response.json();
            setTimeValue(data.subscriptionDurationInSeconds.toString());
            setIndex(data.index.toString());
        } catch (error) {
            console.error('Error fetching variable:', error);
        }
    };

    const fetchIndexFromContract = async () => {
        try {
            setContractForFront(data.contractForFront)
            const web3 = new Web3('https://rpc.sepolia.org');
            let contract = new web3.eth.Contract(DepositorABI, contractForFront);
            let indexValue = await contract.methods.index().call();
            console.log(contractForFront)
            setIndex(indexValue.toString());
        } catch (error) {
            console.error('Error fetching index from contract:', error);
        }
    };

    const fetchWinnerFromServer = async () => {
        try {
            const response = await fetch('http://localhost:3001/getInfos');
            const data = await response.json();
            setWinner(data.winner);
        } catch (error) {
            console.error('Error fetching winner:', error);
        }
    };

    useEffect(() => {
        fetchVariableValue();
        fetchIndexFromContract();
        fetchWinnerFromServer();

        const interval = setInterval(() => {
            fetchVariableValue();
            fetchIndexFromContract();
            fetchWinnerFromServer();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <div className='py-2 mx-auto bg-connect'>
                <div className='mx-5 flex grid-cols-4 gap-x-10 justify-center'>
                    <p className='text-sm font-semibold bg-nav rounded-xl px-2 py-2'><span className='flex items-center justify-center'>🎈 Bridge Lottery Running for ➜ <span className='px-2 text-xs'>{timeValue === '0' ? 'Finished!' : `${timeValue + 's'}`}</span></span></p>
                    <p className='text-sm font-semibold bg-nav rounded-xl px-2 py-2'><span className='flex items-center justify-center'>👥 Total Address Eligible ➜ <span className='px-2 text-xs'>{index}</span></span></p>
                    <p className='text-sm font-semibold bg-nav rounded-xl px-2 py-2'><span className='flex items-center justify-center'>🏆 Winner ➜ <span className='px-2 text-xs'><a href={`https://blockscan.com/address/${winner}`} className=' underline'> {winner}</a></span></span></p>
                    <button className='text-sm font-semibold bg-nav rounded-xl px-2 py-2' onClick={toggleModal}>📖 How it work?</button>
                </div>
            </div>
            {showModal && (
                <div className='modal'>
                    <div className='modal-content bg-nav'>
                        <span className='close' onClick={toggleModal}></span>
                        <p className='font-semibold px-2 pt-3 pb-4 text-sm text-center'>
                            ℹ️ To encourage users to use OP bridge, we are running a lottery using <a href='https://github.com/BridgeLottery' className='text-connect underline'>Bridge Lottery</a>. Each user is entered into a mapping and the winner of the lottery is selected randomly. <a href='https://github.com/BridgeLottery' className='text-connect underline'>Click here to find out more about how it works</a>.
                        </p>
                    </div>
                </div>
            )}
            <div className='pt-5'></div>
        </div>
    );
};

export default LotteryBar;
