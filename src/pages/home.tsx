import "../styles/home.scss"
import DefaultLayout from "@/layouts/default";

export default function Home() {
	return (
    <DefaultLayout>
		<div className="home">
			<section className="pb-20 pt-10">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h1 className="text-4xl font-bold mb-4 text-green-500">
							</h1>
							<p className="text-lg mb-8 leading-loose">
								In 2023, an alarming <strong className="text-green-500">88,000 </strong>trucking operations had to shut down.
								Don&apos;t let your company become a statistic. Oplex Systems is the cutting-edge software solution
								that will help you streamline your logistics, boost profitability, and stay ahead of the curve and thrive in
								the competitive trucking industry.
							</p>
						</div>
						<div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8 text-green-500">Key Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="border border-blue-700 bg-card p-6 rounded-lg transition-transform hover:scale-105">
							<h3 className="text-xl font-bold mb-4">Fleet Management</h3>
							<p>
								Streamline your fleet operations with shipment association,
								efficient route planning, and cloud based document storage.
							</p>
						</div>
						<div className="border border-blue-700 bg-card p-6 rounded-lg transition-transform hover:scale-105">
							<h3 className="text-xl font-bold mb-4">Invoicing and Billing</h3>
							<p>
								Automate your invoicing and billing processes, ensuring accurate
								and timely payments from your customers.
							</p>
						</div>
						<div className="border border-blue-700 bg-card p-6 rounded-lg transition-transform hover:scale-105">
							<h3 className="text-xl font-bold mb-4">Compliance and Reporting</h3>
							<p>
								Stay on top of regulatory requirements and generate comprehensive
								reports to make informed business decisions.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8 text-green-500">Why Choose Oplex Systems?</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-xl font-bold mb-4">Proven Track Record</h3>
								<p>
									Oplex Systems has been trusted by trucking companies to handle
									thousands of deliveries to streamline their operations and drive
									their success. Our cloud based software solution has helped
									businesses like yours navigate the challenges of the industry and
									come out on top.
								</p>
						</div>
						<div>
							<h3 className="text-xl font-bold mb-4">Dedicated Support</h3>
							<p>
								Our team of experts is dedicated to ensuring your success. From
								onboarding to ongoing support, we&apos;re here to help you get the most
								out of our SaaS platform and overcome any obstacles you may face.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Technology and Security */}
			<section className="py-20 tech-and-sec">
				<div className="container mx-auto px-4">
					<h2 className="text-green-500 text-4xl font-bold mb-12">Technology and Security</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
						<div className="flex flex-col items-start">
							<div className="flex items-center mb-4">
								<span className="text-4xl mr-4">🔧</span>
								<h3 className="text-blue-400 text-2xl font-bold">Powered by Cutting-Edge Technology</h3>
							</div>
							<p className="text-gray-300 text-lg leading-relaxed">
								Oplex Systems utilizes the latest technologies to ensure performance and scalability.
								Our cloud infrastructure is built on reliable, high-performance systems that guarantee
								99.9% uptime and seamless operation, even during peak business hours.
							</p>
						</div>
						<div className="flex flex-col items-start">
							<div className="flex items-center mb-4">
								<span className="text-4xl text-green-500 mr-4">🔒</span>
								<h3 className="text-2xl font-bold text-blue-400">Data Security and Privacy</h3>
							</div>
							<p className="text-lg leading-relaxed text-gray-300">
								Your data is our top priority. We use advanced encryption standards (AES-256) to protect
								sensitive information, including your fleet data, financials, and reports. We also comply with
								industry-specific regulations, ensuring that your business stays secure and compliant.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Safety Benefits Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8 text-green-500">Safety Benefits</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-xl font-bold mb-4">Improved Compliance</h3>
							<p>
								By centralizing your documentation and providing easy access to important files,
								Oplex Systems helps ensure that you&apos;re always ready for audits and inspections,
								reducing the risk of compliance-related issues.
							</p>
						</div>
						<div>
							<h3 className="text-xl font-bold mb-4">Enhanced Risk Management</h3>
							<p>
								Our broker validation feature helps protect your business from fraudulent activities,
								while our file management system ensures that all safety-related documents are up-to-date
								and easily accessible, contributing to a safer operation overall.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Efficient Team Management Section */}
			<section className="py-20 bg-gray-900 text-white">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-12 text-center text-green-500">
						Efficient Team Management
					</h2>
					<p className="text-center text-lg mb-12 text-gray-300">
						Oplex Systems empowers your team to work smarter by enabling seamless collaboration
						and role-based management for up to 4 staff members. Streamline communication,
						delegate tasks efficiently, and boost productivity with ease.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Card 1: Role-Based Access */}
						<div className="bg-gradient-to-br from-blue-800 to-green-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
							<div className="flex items-center mb-4">
								<span className="text-4xl text-green-500 mr-4">🔑</span>
								<h3 className="text-2xl font-bold text-blue-400">Role-Based Access</h3>
							</div>
							<p className="text-lg leading-relaxed text-gray-300">
								Assign roles and permissions to your staff, ensuring that everyone has access
								to the tools and information they need without compromising security.
							</p>
						</div>

						{/* Card 2: Collaborative Tools */}
						<div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
							<div className="flex items-center mb-4">
								<span className="text-4xl text-indigo-400 mr-4">🤝</span>
								<h3 className="text-2xl font-bold text-purple-400">Collaborative Tools</h3>
							</div>
							<p className="text-lg leading-relaxed text-gray-300">
								With Oplex Systems, your team can easily collaborate on shipments, track updates,
								and share documents, improving efficiency and communication and reducing errors.
							</p>
						</div>

						{/* Card 3: Task Delegation */}
						<div className="bg-gradient-to-br from-teal-800 to-green-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
							<div className="flex items-center mb-4">
								<span className="text-4xl text-teal-400 mr-4">📂</span>
								<h3 className="text-2xl font-bold text-teal-400">Centralized Documentation</h3>
							</div>
							<p className="text-lg leading-relaxed text-gray-300">
								Store all critical documents and information in one place, making it easy for your team to access
								the data they need to manage shipments and customer communications effectively.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Operational Efficiency Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8 text-center text-green-500">Boost Your Operational Efficiency</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="border border-blue-700 bg-card p-6 rounded-lg transition-transform hover:scale-105">
							<h3 className="text-xl font-bold mb-4">Streamlined Workflows</h3>
							<p>
								Oplex Systems integrates key processes like broker validation, invoicing, and file management
								into a single platform, reducing the time and effort required for daily operations.
							</p>
						</div>
						<div className="border border-blue-700 bg-card p-6 rounded-lg transition-transform hover:scale-105">
							<h3 className="text-xl font-bold mb-4">Reduced Paperwork</h3>
							<p>
								Our digital file management system significantly reduces the need for physical paperwork,
								saving time and reducing the risk of lost or misplaced documents.
							</p>
						</div>
						<div className="border border-blue-700 bg-card p-6 rounded-lg transition-transform hover:scale-105">
							<h3 className="text-xl font-bold mb-4">Faster Invoicing</h3>
							<p>
								Generate and send invoices quickly and easily, improving your cash flow and reducing
								the administrative burden on your team.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-20 bg-green-600 text-white text-center">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-8">Ready to Transform Your Operations?</h2>
					<p className="text-lg mb-8">
						Join hundreds of trucking companies already using Oplex Systems to streamline their operations
						and boost profitability. Don&apos;t miss out—start your free trial today!
					</p>
				</div>
			</section>


			<footer className="bg-gray-900 text-white py-12">
				<div className="container mx-auto px-4 text-center">
					<p className="mb-4">&copy; {new Date().getFullYear()} Oplex Systems. All rights reserved.</p>
					<div className="flex justify-center space-x-4">
					</div>
				</div>
			</footer>
		</div>
    </DefaultLayout>
	)
}
