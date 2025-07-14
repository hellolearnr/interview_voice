import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function FormContainer() {
  return (
    <div className='bg-white p-5 '>
        <div>
            <h2 className='text-sm'>Job Position</h2>
            <Input  placeholder='e.g Full stack developer' className='mt-2' />
        </div>
        <div className='mt-5'>
            <h2 className='text-sm'>Job Description</h2>
            <Textarea  placeholder='e.g Hands on experience from end-to-end development' className='h-[200px] mt-2' />
        </div>
        <div className='mt-5'>
            <h2 className='text-sm'>Interview Duration</h2>
            <Select>
  <SelectTrigger className="w-full mt-2">
    <SelectValue placeholder="Select Duration" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="5">5 mins</SelectItem>
    <SelectItem value="15">15 mins</SelectItem>
    <SelectItem value="30">30 mins</SelectItem>
    <SelectItem value="60">60 mins</SelectItem>
  </SelectContent>
</Select>
        </div>
      
    </div>
  ) 
}

export default FormContainer
