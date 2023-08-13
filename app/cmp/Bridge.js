import React from 'react'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Bridge = () => {
    return (
        <div>
            <div className='pt-4 mx-auto justify-center bg-nav rounded-xl max-w-xl'>
                <div className='grid grid-cols-2 mx-5 bg-bg rounded-xl py-2'>
                    <button className='bg-nav rounded-xl mx-2 py-2 text-white font-semibold text-lg'>Deposit</button>
                    <button className='bg-bg text-textnav font-light text-lg'>Withdraw</button>
                </div>
                <div className='pt-5'></div>
                <div className='pt-3 mx-5 bg-bg rounded-xl py-2'>
                    <div className='flex'>
                        <span className='px-8 pt-1.5 text-textnav'>From</span>
                        <div className='rounded-xl border border-textnav flex items-center justify-center px-2 py-1'>
                            <img alt="Ethereum Mainnet" className="rounded-full w-4 h-4" src="data:image/png;base64,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" />
                            <p className='px-2 font-semibold'>Ethereum Mainnet</p>
                            <span className='ml-1'><ChevronDownIcon className='h-4 w-4' /></span>
                        </div>
                    </div>
                    <div className='pt-3'></div>
                    <div className='pt-2 mx-7 border border-textnav bg-nav rounded-xl py-2 flex '>
                        <input placeholder="0.0" min="0" className='bg-nav font-extrabold mx-5' />
                        <div className='ml-auto border-l border-textnav px-2'></div>
                        <img alt="Ethereum Mainnet" className="rounded-full w-6 h-6 flex" src="data:image/png;base64,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" />
                        <span className='mx-3 hover:text-white flex items-center justify-center font-semibold'>ETH <span className='flex items-center'><ChevronDownIcon className='h-4 w-4' /></span> </span>
                    </div>
                </div>
                <div className='pt-3'>
                    <svg className='text-connect w-5 h-5 justify-center mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M174.6 472.6c4.5 4.7 10.8 7.4 17.4 7.4s12.8-2.7 17.4-7.4l168-176c9.2-9.6 8.8-24.8-.8-33.9s-24.8-8.8-33.9 .8L216 396.1 216 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 340.1L41.4 263.4c-9.2-9.6-24.3-9.9-33.9-.8s-9.9 24.3-.8 33.9l168 176z"></path></svg>
                </div>
                <div className='pt-3'></div>
                <div className='pt-3 mx-5 bg-bg rounded-xl py-2'>
                    <div className='flex'>
                        <p className='px-8 text-textnav'>To</p>
                        <img alt="Op Mainnet" className="rounded-full w-4 h-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ3SURBVHgB7ZtbbFRVFEDXFKalxPAIIj4Qi6WlBWsADRHrI4jYaOq7Ej4wFfRDA0L9gCCJj0RCQ/THWOtHQ3x8qFEjaExMEZPSpoEaSRXBKpVAIq9WEa1PQjv13Bwm597O3G4+zjA/eyWTnH3PmZnMunfvfc9MJjE8tmQYJZYClFFRQQIqSEAFCaggARUkoIIEVJCAChJQQQIqSEAFCaggARUkoIIEVJCAChJQQQIqSEAFCaggARUkoIIEVJCAChJQQQJjuRiMHwe33gRLquHqK8yBBLR3wc52OHw0/nnzq2DTajtOBb+Qp9zckIl7j8CXndBhXms4N7+gJ3L623yBEbH+SfuYOCH7mk93wVMbof905ty6VfDKc4gcPQZPrIfde/FN7lJs2qWwYxts3hAvJ+C+O6HtQ3Mtj8mcqyzjgiiZDh+3wMJ5+CY3gooKoWkz3L3YHQvSacVa8yFqoWYFbG91c2Uz4dk1ma9TUerGPT/BLQ+ZVH0YbjOPJcvh1W0utSZcAo0b8U1uatDqenigxsXN70DDi9E68fV+uGwKVN9o47UmnRqbYfCcjRMmPStmufU/Hoau7uj7BHVs5gxzFS618aIFMK4I/juLL/xfQWNMqqx5zMVBfVj3QmYRHfgTWne7eJJJw9IZLp5TDlMmu/jb78nKwV43TiahuBif+Be0cpnpVFe6eGtz/NrjJ6PxnFDNWXBddK7rG7IyN/Scc+bqGxjAJ/4F3bvUjYeG4O2P4tcWFo6Ik248skB3ZOlQ9XUuvQL2mhQcSuET/zWoMlQ39vfYsxpHUIPCnPrVja+vcON//jUyltk0TaWs2PvvgjtudmuCucbX8Y1fQQUFtuWm6f9t9PXlpdE4fNN47TVuPN7UlaaXiOWsKcpPPw9ftOMbv4KCDhJ0nzRnfo9fGxTzqtku/vkEHDtfk4rNnXdZCSKDg/DBZ/DyG3DgELnAr6DgTAYplTxfS0a7/a+53aRRpYt3dbjxohuia1veg86v7DhhrtJBU9tO9pkUNp3tjN+iPBK/goICGVwJ6fQI16ORNDzuxoHILU0uXjg/urblXeg+QD7w38V27HTjeXPhkdrofNKck62bYHGowL72pr1fSlNV7sZ//W2LfZ7wv1m96nJztj+HyZNsHHSg9z8xH/IHc2wi1N1j7l1Ctaf7oN1+hOnc7vZVe/aZrUUd+cJ/mz9+CjZssV2nqMh2oFXLs69tbYNHGzKPV4Va/KEj5JPcbFbfMrvz6gdh33fZ54NtQ/0zULvSFNk/onOzSmwXS9PTSz5J5Py/GtPNF2Szzf3OVHNT2Ndv2/Evp+PXT5tqv1hL07YHTvSRLxL6Z5bR0e+kBVSQgAoSUEECKkhABQmoIAEVJKCCBFSQgAoSUEECKkhABQmoIAEVJKCCBFSQgAoSUEECKkhABQmoIAEVJKCCBFSQwP/r3fNwstl7WwAAAABJRU5ErkJggg==" />
                        <p className='px-2 font-semibold'>OP Mainnet</p>
                    </div>
                    <span className='px-8 pt-1.5 text-textnav'>You will receive: 0 ETH</span>
                </div>
                <div className='pt-5'></div>
                <div className='pt-3 mx-5 bg-connect text-white rounded-xl py-3'>
                    <span className='mx-auto justify-center text-lg font-semibold ml-auto flex'>Connect Wallet</span>
                </div>
                <div className='pt-5'></div>
            </div>
            <div className='pt-8'></div>
            <div className='rounded-xl max-w-xl mx-auto jutify-center border border-textnav hover:bg-nav py-5 px-5'>
                <p className='text-textnav'>Get testnet tokens ➜</p>
                <span className='text-xs text-textnav'>Use the Superchain Faucet to get testnet tokens to build on the Superchain.</span>
            </div>
        </div >
    )
}

export default Bridge
