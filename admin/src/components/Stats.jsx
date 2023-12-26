import React from 'react'

export const Stats = () => {
  return (
    <>
    {/* <div class="bg-gray-200 h-screen w-screen"> */}
    <div class="grid gap-4 lg:gap-8 md:grid-cols-3 lg:p-8 md:p-8 sm:p-2 p-2 lg:mt-9 md:mt-9 sm:m-0 m-0  lg:scale-100 md:scale-100 sm:scale-75 scale-75">
        <div class="relative p-6 rounded-2xl bg-[#b0b0b050]  shadow shadow-[#49494980] dark:bg-gray-800">
            <div class="space-y-2">
                <div
                    class="flex items-center text-[#373737] space-x-2 rtl:space-x-reverse text-sm font-medium  dark:text-gray-200">
                    <span>Linked belongings</span>
                </div>

                <div class="text-3xl font-semibold text-[#373737]">
                    {"length"}
                </div>

                <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">

                    <span>{"persent"} increase</span>

                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div class="relative p-6 rounded-2xl bg-[#b0b0b050]  shadow shadow-[#49494980] dark:bg-gray-800">
            <div class="space-y-2">
                <div
                    class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                    <span>Lost belongings</span>
                </div>

                <div class="text-3xl font-semibold text-[#373737]">
                    {"length"}
                </div>

                <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-red-600">

                    <span>3% decrease</span>

                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>

        </div>

        <div class="relative p-6 rounded-2xl bg-[#b0b0b050]  shadow shadow-[#49494980] dark:bg-gray-800">
            <div class="space-y-2">
                <div
                    class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">

                    <span>Found belongings</span>
                </div>

                <div class="text-3xl font-semibold text-[#373737]">
                    {"length"}
                </div>

                <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">

                    <span>7% increase</span>

                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
{/* </div> */}
    </>
  )
}
