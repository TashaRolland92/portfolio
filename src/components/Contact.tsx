import React, { FormEvent } from "react";

const Contact = () => {

	const [result, setResult] = React.useState<JSX.Element | string | null>(null);

	const successMessage = (
		<div className="contact__success-message align-centre">
			<p>Your message has been submitted successfully. <br />
			I will get back to you, as soon as possible!</p>
		</div>
	);

	const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();
		setResult(<div className="align-centre"><p>Sending....</p></div>);
		const formData = new FormData(event.target as HTMLFormElement);
		formData.append("access_key", "5bd23ab8-87a9-4dff-917e-4c5eff76b8c1");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData
			});

			const data: { success: boolean; message: string } = await response.json();

			if (data.success) {
				setResult(successMessage);

				setTimeout(() => {
					setResult(null);
				}, 10000);

				(event.target as HTMLFormElement).reset();
			} else {
				console.log("Error", data);
				setResult(<div className="align-centre">{data.message}</div>);
			}
		} catch (error) {
			console.error("Error submitting the form");
			setResult("Form Submission Failed");
		}
	};

	return (
		<section id="section4" className="contact">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<span className="contact__top-title">Get in Touch</span>
						<h2 className="align-centre">Contact Me.</h2>
						<form onSubmit={onSubmit}>
							<p>
								<input
									placeholder="Name"
									type="text"
									id="name"
									name="name"
									className="contact__input contact__input-name"
									required
								/>
							</p>
							<p>
								<input
									placeholder="Email"
									type="email"
									id="mail"
									name="email"
									className="contact__input contact__input-email"
									required
								/>
							</p>
							<p>
								<textarea
									placeholder="Message"
									id="message"
									name="message"
									className="contact__input contact__input-message"
									rows={6}
									required
								>
								</textarea>
							</p>
							<div className="d-flex justify-content-end">
								<button type="submit" className="btn btn__submit">Send Message</button>
							</div>
						</form>
						{result}
					</div>
				</div>
			</div>
		</section>
	)
};

export default Contact;