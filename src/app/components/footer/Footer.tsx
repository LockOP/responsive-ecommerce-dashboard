import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-zinc-950 text-gray-300 p-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <img src="./footerlogo.svg" alt=""  className='w-[50%]' />
            <div className="text-sm font-semibold mb-2">The AI Powered Order Management System</div>
            <div className='flex gap-2'>
                <img src="./linkedin.svg" alt="" />
                <img src="./twitter.svg" alt="" />
                <img src="./messenger.svg" alt="" />
            </div>
            <div className="text-sm w-[40%]">© 2024 OmniSynkAI, Inc. Omni = Everywhere | Built with love in Baltimore.</div>
          </div>
          <div className='flex gap-4'>
          <div>
            <div className="text-lg font-semibold mb-2">Company</div>
            <div className="flex flex-col gap-1">
                <div className="text-sm">About us</div>
                <div className="text-sm">Careers</div>
                <div className="text-sm">Invest</div>
                <div className="text-sm">Pricing</div>
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold mb-2">Features</div>
            <div className="flex flex-col gap-1">
                <div className="text-sm">Smart pricing</div>
                <div className="text-sm">Link hub</div>
                <div className="text-sm">Order fulfillment</div>
                <div className="text-sm">Packing slip generator</div>
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold mb-2">Resources</div>
            <div className="flex flex-col gap-1">
                <div className="text-sm">Media Kit</div>
                <div className="text-sm">Privacy policy</div>
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold mb-2">Contact Us</div>
            <div className="flex flex-col gap-1">
                <div className="text-sm">hi@omnisynkai.com</div>
                <div className="text-sm">Helpdesk</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer