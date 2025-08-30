"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <Link href="/" passHref>
          <Button variant="outline" size="sm">
            <Home className="mr-2 size-4" />
            Back to Home
          </Button>
        </Link>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e)=>{}}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">Name</label>
                  <input className='border-1 h-full rounded-md py-3 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm' id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="email">Email</label>
                  <input className='border-1 h-full rounded-md py-3 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm' id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="subject">Subject</label>
                  <input className='border-1 h-full rounded-md py-3 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm' id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="message">Message</label>
                  <textarea className='border-1 h-full rounded-md py-3 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm' id="message" name="message" value={formData.message} onChange={handleChange} required />
                </div>
              </div>
              <Button type="submit" className="mt-6 bg-gradient-to-r from-indigo-400 from-10% via-sky-500 via-30% to-emerald-600 to-90% text-white">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>You can also reach us using the following information:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="size-4" />
              <span>moathaza@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="size-4" />
              <span>+962 (78) 676-8262</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="size-4" />
              <span>Amman, Jordan</span>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">Feel free to contact me any time</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}