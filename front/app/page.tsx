'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [currencyRate, setCurrencyRate] = useState<string | undefined>(
    undefined
  )
  const [amount, setAmount] = useState<string>('1')
  const [result, setResult] = useState<string>('')

  const convertCurrency = () => {
    if (!currencyRate) {
      alert('Currency rate is not defined, please refresh the page')
    } else {
      const result = parseInt(amount) * parseInt(currencyRate)
      setResult(result.toString())
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:3001')
      const json = await data.json()
      setCurrencyRate(json.rate)
    }
    setTimeout(() => {
      setCurrencyRate('12')
    }, 500)
  }, [])

  if (!currencyRate) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-background'>
        <div className='text-center space-y-4'>
          <h2 className='text-2xl font-semibold text-foreground'>Loading...</h2>
          <p className='text-muted-foreground'>
            Please wait while we fetch currency rate.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full min-h-screen bg-white dark:bg-gray-900'>
      <div className='max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-6'>
          EUR to PLN Converter
        </h2>
        <div className='space-y-4'>
          <div>
            <label
              htmlFor='amount'
              className='block text-sm font-medium text-gray-700 dark:text-gray-300'
            >
              Amount (EUR)
            </label>
            <input
              type='number'
              id='amount'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              placeholder='Enter amount in EUR'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='from-currency'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300'
              >
                From
              </label>
              <input
                type='text'
                id='from-currency'
                className='mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                value='EUR'
                disabled
                aria-label='From currency: Euro'
              />
            </div>
            <div>
              <label
                htmlFor='to-currency'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300'
              >
                To
              </label>
              <input
                type='text'
                id='to-currency'
                className='mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                value='PLN'
                disabled
                aria-label='To currency: Polish Złoty'
              />
            </div>
          </div>
          <button
            onClick={convertCurrency}
            className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600'
          >
            Convert
          </button>
          {result && (
            <div className='mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-md'>
              <p className='text-center text-gray-800 dark:text-white'>
                <span className='text-2xl font-bold'>{result}</span> PLN
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
