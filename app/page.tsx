import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Users, GraduationCap, Home, Utensils, Stethoscope, Mail, Phone, MapPin, HandHeart, UserPlus, Shield, Target, Globe, Award, ArrowRight, CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SC</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">Supreme Careconnect</span>
              <p className="text-xs text-gray-600 -mt-1">Connecting Hands, Changing Lives</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="#programs" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Programs
            </Link>
            <Link href="#impact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Impact
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Support Our Cause
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                    Connecting Hands, Changing Lives
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                    A World Where Every{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Hand Lifted in Need
                    </span>{" "}
                    Meets a Heart Ready to Give
                  </h1>
                  <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                    Supreme Careconnect is a nonprofit foundation dedicated to reaching out to the vulnerable, the forgotten, and the underserved. We create meaningful impact through compassion, connection, and care.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                    <HandHeart className="mr-2 h-5 w-5" />
                    Make an Impact
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                    <UserPlus className="mr-2 h-5 w-5" />
                    Join Our Mission
                  </Button>
                </div>
                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">5K+</div>
                    <div className="text-sm text-gray-600">Lives Impacted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">150+</div>
                    <div className="text-sm text-gray-600">Volunteers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">25+</div>
                    <div className="text-sm text-gray-600">Communities</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl transform rotate-3 opacity-10"></div>
                <Image
                  src="/careconnect.png"
                  alt="Community support and care"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Verified Impact</div>
                      <div className="text-sm text-gray-600">Transparent Operations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-xl text-gray-700 leading-relaxed italic">
                    "A world where every hand lifted in need meets a heart ready to give."
                  </p>
                </div>
                <div className="p-8 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To restore hope and dignity by connecting compassionate hearts to the needs of the vulnerable—providing essential support, care, and love to those who need it most. Through community-driven outreach, we aim to touch lives, uplift hearts, and create a world where no one is left behind.
                  </p>
                </div>
              </div>
              <div className="grid gap-8 md:grid-cols-3 pt-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                    <HandHeart className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Connection</h3>
                  <p className="text-gray-600">Giving is not just charity—it's connection, healing, and purpose.</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Community</h3>
                  <p className="text-gray-600">Community-driven outreach that touches lives and uplifts hearts.</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Care</h3>
                  <p className="text-gray-600">We believe care should not be a privilege—it's a fundamental right.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                What We Do
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Core Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether it's food, clothing, education, or emotional support—we show up with love and action.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Utensils className="h-7 w-7 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Food & Clothing Distribution</CardTitle>
                  <CardDescription className="text-gray-600">
                    Direct distribution of nutritious meals and essential clothing to families and individuals in need, ensuring basic necessities are met with dignity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Community Outreach Programs</CardTitle>
                  <CardDescription className="text-gray-600">
                    Comprehensive community engagement initiatives that connect hearts, build relationships, and create lasting positive change in underserved areas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-7 w-7 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Educational Support for Children</CardTitle>
                  <CardDescription className="text-gray-600">
                    Targeted educational programs, school supplies, tutoring, and mentorship to help children break the cycle of poverty through learning.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Stethoscope className="h-7 w-7 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Medical & Emotional Aid</CardTitle>
                  <CardDescription className="text-gray-600">
                    Comprehensive healthcare support and emotional counseling services to address both physical and mental health needs of vulnerable populations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg md:col-span-2 lg:col-span-1">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <HandHeart className="h-7 w-7 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Strategic Partnerships</CardTitle>
                  <CardDescription className="text-gray-600">
                    Collaborations with like-hearted organizations to amplify our impact and create sustainable solutions for community challenges.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
                Measurable Impact
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Creating Real Change</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to transparency means every contribution is tracked and every impact is measured.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="text-4xl font-bold text-blue-600">15,000+</div>
                <div className="text-gray-700 font-medium">Meals Distributed</div>
                <div className="text-sm text-gray-600">Across 25 communities</div>
              </div>
              <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="text-4xl font-bold text-green-600">2,500+</div>
                <div className="text-gray-700 font-medium">Families Supported</div>
                <div className="text-sm text-gray-600">With comprehensive aid</div>
              </div>
              <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50">
                <div className="text-4xl font-bold text-purple-600">800+</div>
                <div className="text-gray-700 font-medium">Students Educated</div>
                <div className="text-sm text-gray-600">Through our programs</div>
              </div>
              <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50">
                <div className="text-4xl font-bold text-orange-600">150+</div>
                <div className="text-gray-700 font-medium">Active Volunteers</div>
                <div className="text-sm text-gray-600">Dedicated team members</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Why We Care</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                We believe care should not be a privilege. At Supreme Careconnect, giving is not just charity—it's connection, it's healing, it's purpose. Join us in creating a world where no one is left behind.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  <HandHeart className="mr-2 h-5 w-5" />
                  Connect 
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Change Lives Today
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                Get In Touch
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Our Foundation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to make a difference? Reach out to learn more about our programs or discuss partnership opportunities.
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
                      <p className="text-gray-600 text-sm">Lagos, Nigeria </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600 text-sm">07046342625<br />Mon-Fri 9AM-6PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">odunsiadebayo24@gmail.com</p>
                  </div>
                </div>
              </div>
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription className="text-base">
                    We'd love to hear from you. Send us a message and we'll respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <Input id="first-name" placeholder="Enter your first name" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Enter your last name" className="h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What is this regarding?" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={5} />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SC</span>
                </div>
                <div>
                  <span className="text-xl font-bold">Supreme Careconnect</span>
                  <p className="text-xs text-gray-400 -mt-1">Foundation</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connecting hands, changing lives through compassion, connection, and care.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Programs</h3>
              <div className="space-y-3 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors block">
                  Food Security
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors block">
                  Housing Support
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors block">
                  Education
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors block">
                  Healthcare
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Get Involved</h3>
              <div className="space-y-3 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors block">
                  Make a Donation
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors block">
                  Volunteer
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors block">
                  Corporate Partnerships
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors block">
                  Grant Opportunities
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Foundation</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <p>123 Foundation Avenue</p>
                <p>Community Center, CC 12345</p>
                <p>(555) 123-4567</p>
                <p>info@supremecareconnect.org</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Supreme Careconnect Foundation. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="#" className="hover:text-white transition-colors">Annual Reports</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
