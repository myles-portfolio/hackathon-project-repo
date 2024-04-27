import { TutorialPart } from "./interfaces";

export const tutorialContent: TutorialPart[] = [
	{
		id: "welcome",
		title: "Welcome",
		contentText: [
			{
				content: `                   
        <h2>
            Welcome, software developers!
        </h2>
        <p>
            Whether you're starting your journey in the tech world or looking to solidify your foundational knowledge, you've come to the right place. This free tutorial has been crafted to guide you through the essentials of planning and executing software projects, tailored specifically for solo developers and small teams.
        </p>
        <p>
            Understanding the methodology behind project planning and execution is as crucial as coding itself. It's not just about writing code; it's about crafting solutions that are efficient, scalable, and, above all, impactful.
        </p>`,
			},
			{
				content: `
        <h2>
            What You'll Learn:
        </h2>
        <ul>
            <li">
                <strong>The Essentials of Software Project Planning:</strong> Dive into the art and science of turning ideas into actionable project plans. Learn to outline your project's scope, define its objectives, and set achievable milestones.
            </li>
            <li>
                <strong>Execution Strategies for Solo Devs and Small Teams:</strong> Discover the tools, techniques, and practices that can make or break software projects in lean environments. Find out how to keep your project on track even when resources are limited.
            </li>
            <li>
                <strong>Navigating Through Development Approaches:</strong> Unravel the mysteries behind the three most popular software development methodologies today:
                <ul>
                    <li>
                        <strong>Waterfall:</strong> A sequential, phase-based approach that's straightforward and disciplined.
                    </li>
                    <li>
                        <strong>Agile:</strong> A dynamic and iterative method that embraces change and encourages continuous feedback.
                    </li>
                    <li>
                        <strong>Extreme Programming (XP):</strong> A rigorous yet flexible practice focusing on excellence in software engineering.
                    </li>
                </ul>
            </li>
        </ul>`,
			},
			{
				content: `
        <h2>
            Who Is This For?
        </h2>
        <p>
            This tutorial is tailor-made for:
        </p>
        <ul class="list-disc ml-10 mb-4">
            <li>
                Aspiring developers embarking on their software development journey.
            </li>
            <li>
                Experienced coders seeking to understand project planning and execution better.
            </li>
            <li>
                Anyone curious about the methodologies that have shaped the software industry.
            </li>
        </ul>
        <h3>
            Let's Get Started!
        </h3>
        <p>
            Ready to dive in? Click "<strong>Start Learning</strong>" to begin your exploration into the methodologies that power software development across the globe. Your path to becoming a proficient developer in planning and executing software projects begins now!
        </p>`,
			},
		],
		contentClass: "text-justify",
		buttonText: "Start Learning",
		shouldTutNavShow: false,
		headerText: "A Beginner-Friendly Software Development Lifecycle Tutorial",
		headerImage: "/website-interface.svg",
	},
	{
		id: "intro",
		title: "Introduction",
		contentText: [
			{
				content: `                   
        <h2>
            Common Approaches to Software Development
        </h2>
        <p>
            Developing software is an art and science that involves various approaches, each with its strengths and optimal use cases. Let's take a look at three common approaches used solo developers and both small and large teams:
        </p>
        <ul>
            <li>
                <strong>Waterfall 🌊:</strong> Waterfall is the traditional phase-oriented methodology. It's like a step-by-step recipe where you complete one step before moving on to the next. Think of it as a waterfall flowing downstream, where each phase cascades into the next, from requirements to maintenance.
            </li>
            <li>
                <strong>Agile 🌀:</strong> Agile is a flexible, practice-oriented approach. Picture a series of loops or cycles, where planning, development, and evaluation happen in quick, repetitive rounds. It's like preparing dishes in a professional kitchen—fast, adaptable, and customer-focused, with continuous tasting and improvement.
            </li>
            <li>
                <strong>Extreme Programming (XP) ⚙️:</strong> XP is a subset of Agile that emphasizes technical best practices and high-quality results through a set of defined practices. Imagine a set of gears working together seamlessly or a team sport where close collaboration and quick passes lead to a score. It's all about constant communication, feedback, and refinement.
            </li>
        </ul>`,
			},
			{
				content: `
        <h2>
            Waterfall Principles & Characteristics
        </h2>
        <p>
            The Waterfall methodology, one of the earliest software development methods, is a linear and sequential approach where each phase of the development process flows steadily downwards, like a waterfall, through the phases of conception, initiation, analysis, design, construction, testing, deployment, and maintenance.
        </p>
        <h3>
            Principles
        </h3>
        <ul>
            <li>
            <strong>➡️Sequential Process Flow:</strong> The Waterfall model is characterized by a series of steps that flow in a linear sequence. Each phase must be completed before moving on to the next, with little to no overlap between phases.
            </li>
            <li>
            <strong>🛑Completion Before Progression:</strong> No phase begins until the prior phase is complete, ensuring thoroughness and accuracy at each step. This principle reinforces discipline in project management and execution.
            </li>
            <li>
            <strong>📝Documentation and Planning Emphasis:</strong> Detailed documentation is a cornerstone of the Waterfall methodology. Each phase is well-documented, providing a clear set of deliverables that guide the next phase. This rigorous documentation facilitates clear understanding and reference throughout the project lifecycle.
            </li>
        </ul>
        <h3>
            Characteristics
        </h3>
        <ul>
            <li><strong>1️⃣Highly Structured:</strong> The Waterfall model's strength lies in its structured design, making it predictable and easy to understand. Each phase has specific deliverables and a review process, contributing to a straightforward management and execution process.
            </li>
            <li>
            <strong>2️⃣Predictability and Control:</strong> Due to its linear progression, the Waterfall model allows for enhanced control over the project timeline, budget, and resources. This predictability makes it easier for project managers to allocate resources effectively.
            </li>
            <li>
            <strong>3️⃣Best Suited for Well-Defined Projects:</strong> Projects with clear objectives, well-defined requirements, and a low risk of change are ideal candidates for the Waterfall methodology. Its structured nature makes it less flexible, thus less suited for projects where requirements are expected to evolve.
            </li>
        </ul>`,
			},
			{
				content: `
        <h2>
            Agile Principles & Characteristics
        </h2>
        <p>
            Agile methodology is a set of principles for software development under which requirements and solutions evolve through the collaborative effort of self-organizing and cross-functional teams. It advocates adaptive planning, evolutionary development, early delivery, and continual improvement, and it encourages flexible responses to change.
        </p>
        <h3>
            Principles
        </h3>
        <ul>
            <li>
            <strong>🧑‍🤝‍🧑Individuals and Interactions Over Processes and Tools:</strong> Agile prioritizes human communication and feedback, valuing the dynamic interaction of team members over rigid adherence to tools and processes.
            </li>
            <li>
            <strong>👨‍💻Working Software Over Comprehensive Documentation:</strong> Agile values the functionality of the final product more than detailed documentation. While documentation is not disregarded, it is streamlined to what is necessary to deliver the next piece of functional software.
            </li>
            <li>
            <strong>🤝Customer Collaboration Over Contract Negotiation:</strong> Agile involves customers in the development process, preferring collaborative decision-making over sticking strictly to the terms of a contract. This principle ensures that the product evolves according to actual user needs.
            </li>
            <li>
            <strong>🛞Responding to Change Over Following a Plan:</strong> Agile teams are expected to be responsive to change, even late in the development process. This flexibility ensures the product remains relevant and competitive in a changing market environment.
            </li>
        </ul>
        <h3>
            Characteristics
        </h3>
        <ul>
            <li><strong>1️⃣Flexibility and Adaptiveness: :</strong> Agile teams can quickly pivot in response to feedback or changing requirements. This adaptiveness reduces the risk of developing an outdated or irrelevant product.
            </li>
            <li>
            <strong>2️⃣Emphasis on Direct Communication:</strong> Regular, face-to-face communication among team members and between stakeholders and the development team is a cornerstone of Agile, fostering clarity and reducing the likelihood of misunderstandings.
            </li>
            <li>
            <strong>3️⃣Frequent Delivery of Functional Software:</strong> Agile focuses on the continuous delivery of small increments of working software, allowing teams to demonstrate progress and adjust as needed.
            </li>
            <li>
            <strong>4️⃣Customer Involvement:</strong> Agile methodology encourages ongoing customer involvement to ensure the product meets their needs and expectations, leading to higher customer satisfaction.
            </li>
        </ul>`,
			},
			{
				content: `
        <h2>
            Extreme Programming (XP) Principles & Characteristics
        </h2>
        <p>
            Extreme Programming (XP) is an agile software development framework that aims to produce higher quality software, and higher quality of life for the development team. XP is characterized by its short development cycles, incremental planning approach, continuous feedback, and—most notably—its emphasis on technical excellence and good design.
        </p>
        <h3>
            Principles
        </h3>
        <ul>
            <li>
            <strong>🧑‍🤝‍🧑Close Collaboration Between Developers and Customers:</strong> Agile prioritizes human communication and feedback, valuing the dynamic interaction of team members over rigid adherence to tools and processes.
            </li>
            <li>
            <strong>👩‍🎨Simplicity in Design:</strong> XP promotes the idea that systems should be designed as simply as possible. This simplicity allows for easier changes in the future and avoids unnecessary complexity that can lead to errors or increased maintenance costs.
            </li>
            <li>
            <strong>🔁Frequent Feedback:</strong> Regular feedback from the customer, and within the development team, is crucial in XP. This feedback loop helps the team stay aligned with customer needs and adjust practices as the project evolves.
            </li>
            <li>
            <strong>🤝Team Empowerment:</strong> XP believes that every team member should have a voice in the development process. This empowerment encourages innovation and shared ownership of the project, leading to more creative solutions and a stronger, more cohesive team.
            </li>
        </ul>
        <h3>
            Characteristics
        </h3>
        <ul>
            <li><strong>1️⃣High Collaboration and Iteration:</strong> XP involves customers in the development process to a high degree, with frequent releases and iterations that ensure the product is developing in alignment with customer needs.
            </li>
            <li>
            <strong>2️⃣Emphasis on Technical Excellence:</strong> XP teams strive for excellence in coding and testing practices. Continuous integration, test-driven development, and pair programming are key practices that enhance product quality and team productivity.
            </li>
            <li>
            <strong>3️⃣Adaptability to Change:</strong> XP is designed to accommodate changes in customer requirements, even late in the development cycle. This flexibility ensures the final product remains relevant and valuable to the customer.
            </li>
        </ul>`,
			},
			{
				content: `
        <h2>
            So, what method is best for your project?
        </h2>
        <p>
            The short answer is: <strong>it depends</strong>.
        </p>
        <div class="overflow-x-auto shadow-md sm:rounded-lg mb-10">
            <table class="w-full text-sm text-left">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                            🌊 Waterfall
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                                🌀 Agile
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                                ⚙️ XP
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">
                            Requirements are well-understood and unlikely to change.
                        </td>
                        <td class="px-6 py-4">
                            Requirements are expected to change or are not fully understood at the outset.
                        </td>
                        <td class="px-6 py-4">
                            The project scope is expected to change or is not fully defined at the outset.
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">
                            The project scope is clear, and the product definition is stable.
                        </td>
                        <td class="px-6 py-4">
                            The project benefits from frequent reviews and adaptations, allowing for rapid pivots based on user feedback or market trends.
                        </td>
                        <td class="px-6 py-4">
                            The risk of technological change is high, and the project needs to adapt rapidly.
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <td class="px-6 py-4">
                            There is a need for strict regulatory documentation and compliance.
                        </td>
                        <td class="px-6 py-4">
                            Innovation, speed, and flexibility are more critical than predictability and control.
                        </td>
                        <td class="px-6 py-4">
                            There is a need for frequent delivery of functional software to accommodate fast-paced environments.
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <td class="px-6 py-4">
                            The technology being used is well-understood, and there are no exploratory elements involved.
                        </td>
                        <td class="px-6 py-4">
                            The project environment supports collaboration and communication among cross-functional teams.
                        </td>
                        <td class="px-6 py-4">
                            A high level of customer involvement is possible and desired to ensure the product meets real user needs.
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>`,
			},
		],
		contentClass: "text-left",
		shouldTutNavShow: true,
	},
	{
		id: "part-one",
		title: "Part 1: The Foundation of Software Projects",
		contentText: [
			{
				content: `
			<h2>Where to begin?</h2>
			<p>Every great software project begins with a solid foundation. This initial phase, although called by different names in various methodologies, shares a common goal: <strong>to lay down the groundwork for successful development.</strong></p> 
			<p>In this part of the tutorial, we'll explore how the Waterfall, Agile, and Extreme Programming (XP) methodologies approach this crucial stage.</p>`,
			},
			{
				content: `
			<h2>Getting Started with Waterfall</h2>
			<p>In Waterfall, the journey begins with clarifying your project's goals during the <strong>Requirements</strong> phase. It's about taking your idea and outlining exactly what you want your project to achieve, considering both the features it will have and how it should perform.</p>
			<h3>Action Plan:</h3>
			<ol>
				<li>
					<strong>Define Your Project Goals:</strong> Start by writing down what problem your project solves or what it aims to achieve. Think about who will use it and in what context.</li>
				<li>
					<strong>Specify Functional and Non-Functional Requirements:</strong> Use a simple document to list all features (functional requirements) and performance expectations like speed, security, and usability (non-functional requirements). Tools like Notion or Google Docs can keep things organized.</li>
				<li>
					<strong>Sketch Use Cases:</strong> Draft scenarios showing how your project will be used. This helps in visualizing the user's journey and ensures the project is user-centric. Draw.io or simple sketches on paper can be effective.</li>
			</ol>`,
			},
			{
				content: `
			<h2>Getting Started with Agile</h2>
			<p>Agile methodologies introduce the project through the <strong>Concept</strong> or <strong>Inception</strong> phase. Agile methodologies like Scrum or Kanban emphasize flexibility and iterative development. The Concept or Inception phase helps you set a broad vision and outline the scope without getting bogged down in details.</p>
			<h3>Action Plan:</h3>
			<ol>
				<li>
					<strong>Craft Your Vision and Goals:</strong> Use a tool like Trello to brainstorm and categorize ideas about what your project will do. Think big picture and be ready to adapt.</li>
				<li>
					<strong>Outline High-Level Requirements with User Stories:</strong> Write down user stories in a notebook or a digital tool like Jira. Each story should focus on a specific user need or goal your project addresses.</li>
				<li>
					<strong>Value Proposition Canvas:</strong> Even if you're working solo, understanding the value your project delivers is crucial. Sketch out a Value Proposition Canvas to clarify the benefits and features.</li>
			</ol>`,
			},
			{
				content: `
			<h2>Getting Started with XP</h2>
			<p>Extreme Programming (XP) starts with the <strong>Planning</strong> phase. XP focuses on continuous feedback and simplicity. This phase is about laying out the groundwork with user stories and a basic plan for your project's development cycle.</p>
			<h3>Action Plan:</h3>
			<ol>
				<li>
					<strong>Create User Stories:</strong> Capture the functionality of your project from a user's perspective using index cards or a digital board like GitHub Projects. This makes it easier to prioritize tasks.</li>
				<li>
					<strong>Plan Releases:</strong> Decide what features make up your first version. Tools like Trello can help you organize stories into sprints or phases of development.</li>
				<li>
					<strong>System Metaphors:</strong> Develop a simple metaphor or analogy that describes your project's overall system. This helps in keeping the design and development focused and coherent.</li>
			</ol>`,
			},
			{
				content: `
			<h2>Understanding the Foundation</h2>
			<p>In all three methodologies, the initial phase is crucial for setting the direction and ensuring that the project's objectives are clear. Whether it's called <strong>Requirements</strong>, <strong>Concept/Inception</strong>, or <strong>Planning</strong>,  the goal is to start with a clear understanding of what you want to build and for whom, setting the stage for a successful project.For new or solo developers, these initial stages are about turning your vision into a concrete plan that guides your development process.</p>

			<p>As we proceed through this tutorial, we'll delve deeper into how these methodologies build upon their initial phases to manage software development processes. Each approach has its strengths and challenges, but they all start by laying a solid foundation for success. Remember, these methodologies are not strict rules but frameworks to help organize your thoughts and work. Feel free to adapt or combine them as needed to suit your project and working style best.</p>`,
			},
		],
		contentClass: "text-left",
		shouldTutNavShow: true,
		headerImage: "/interface-research.svg",
	},
	{
		id: "part-two",
		title: "Part 2: Laying the Groundwork for Software Projects",
		contentText: [
			{
				content: `
		<h2>From Vision to Blueprint</h2>
		<p>After establishing a solid foundation for our software project through careful planning and requirements gathering, we move into one of the most critical stages: <strong>Design</strong>. In this phase, we transition from what we want our software to achieve to how we will build it. This part of our journey is where creativity meets practicality, and visions start taking a tangible form.</p>
		<p>Design isn't just about aesthetics; it's about creating a blueprint that guides the development process. It involves making key decisions on the architecture, technologies, and frameworks that will be used to bring the project to life. Each methodology approaches design with its unique perspective and tools, but the goal remains the same: <strong>to devise a robust, scalable, and efficient system that meets the project's requirements and is adaptable to future needs.</strong></p>
		<p>As we delve into each methodology, remember that the design phase is your opportunity to solve problems creatively and set your project on the path to success. Let's explore how you can make the most of this phase, regardless of the methodology you choose.</p>`,
			},
			{
				content: `<h2>Waterfall's Design Phase</h2>
			<p>The <strong>Design</strong> phase in Waterfall is about taking your documented requirements and turning them into a detailed software design. This phase lays out the architecture, components, interfaces, and data for your project in a way that addresses all identified requirements.</p>
			<h3>Mastering Waterfall's Design Phase:</h3>
			<ol>
				<li>
					<strong>Create Architectural Diagrams:</strong> Use tools like Lucidchart or Draw.io to map out the high-level architecture of your project, showing how different parts of your system will interact.</li>
				<li>
					<strong>Detail Component Design:</strong> For each component or module, draft detailed designs that describe the logic, data structures, and algorithms needed. Simplify complex problems by breaking them down into smaller, manageable parts.</li>
				<li>
					<strong>Interface Definitions:</strong> Clearly define how different parts of your application will communicate with each other and with any external systems. Document APIs, data formats, and protocols.
					</li>
				<li>
					<strong>Review and Refine:</strong> Developers can benefit from self-review or peer review through developer communities like Stack Overflow or GitHub to ensure the design meets the project goals and is feasible with available resources.
				</li>
			</ol>`,
			},
			{
				content: `<h2>Sprint Planning with Agile</h2>
			<p>Agile methodologies, particularly Scrum, use <strong>Sprint Planning</strong> to prepare for a development cycle (sprint). This is where you decide what work will be done during the sprint based on your project's backlog (prioritized list of user stories).</p>
			<h3>Mastering Agile's Sprint Planning:</h3>
			<ol>
				<li>
					<strong>Prioritize User Stories:</strong> Review your backlog and select the most important or urgent user stories for the upcoming sprint. Tools like Jira or Asana can help manage your backlog.</li>
				<li>
					<strong>Task Breakdown:</strong> Break each selected user story into tasks and estimate their complexity or time required. This can be done using Trello boards or GitHub Projects.</li>
				<li>
					<strong>Set Sprint Goals:</strong> Define a clear goal for the sprint based on the selected user stories. This goal should reflect a tangible outcome that brings value to users.
					</li>
				<li>
					<strong>Prepare the Sprint Board:</strong> Organize tasks on a sprint board, digital or physical, to track progress during the sprint. Ensure all tasks are actionable and clearly defined.
				</li>
			</ol>`,
			},
			{
				content: `<h2>Designing in XP</h2>
			<p><strong>Designing</strong> in XP emphasizes simplicity and the principle of doing only what's necessary at the current stage. The design is continuously refined based on feedback and new insights as development progresses.</p>
			<h3>Mastering XP's Designing Phase:</h3>
			<ol>
				<li>
					<strong>Prioritize User Stories:</strong> Review your backlog and select the most important or urgent user stories for the upcoming sprint. Tools like Jira or Asana can help manage your backlog.</li>
				<li>
					<strong>Use System Metaphors:</strong> Develop and refine system metaphors that guide the design and communication about the system. This helps maintain coherence in your project.</li>
				<li>
					<strong>Continuous Refactoring:</strong> Be prepared to refine and optimize the design as you develop and learn more about the problem space. Tools like Refactoring Guru provide guidance on refactoring patterns.
					</li>
				<li>
					<strong>Test-Driven Development (TDD):</strong> Use TDD as a design tool. Writing tests before code not only ensures your code works as intended but also helps clarify the design and interfaces of your components.
				</li>
			</ol>`,
			},
			{
				content: `
		<h2>User-Focused Design is <i>KEY</i>!</h2>
		<p>The design phase stands at the intersection of planning and innovation. It's where the project's vision transforms into a technical blueprint. This blueprint might take the form of comprehensive diagrams in the Waterfall method, flexible sprint plans in Agile, or the pursuit of simplicity in XP. The essence of this phase is not to set constraints through rigid planning but to chart a course for crafting solutions that resonate with both your objectives and your users' needs.</p>

		<p>A pivotal aspect of successful design is its user-centric focus. Designing with the user in mind ensures that your project is not just technically sound but also valuable and intuitive to those who matter most—the end users. Keep your designs adaptable, allowing them to evolve as you gain deeper insights into user requirements and behaviors. Remember, the true measure of your project's success is in its ability to meet user expectations and solve real-world problems effectively.</p>`,
			},
		],
		contentClass: "text-left",
		shouldTutNavShow: true,
		headerImage: "/building-website.svg",
	},
	{
		id: "part-three",
		title: "Part 3:",
		contentText: [
			{ content: `<p>Content part 1</p>` },
			{ content: `<p>Content part 2</p>` },
			{ content: `<p>Content part 3</p>` },
		],
		contentClass: "text-left",
		shouldTutNavShow: true,
	},
	{
		id: "part-four",
		title: "Part 4:",
		contentText: [
			{ content: `<p>Content part 1</p>` },
			{ content: `<p>Content part 2</p>` },
			{ content: `<p>Content part 3</p>` },
		],
		contentClass: "text-left",
		shouldTutNavShow: true,
	},
	{
		id: "part-five",
		title: "Part 5:",
		contentText: [
			{ content: `<p>Content part 1</p>` },
			{ content: `<p>Content part 2</p>` },
			{ content: `<p>Content part 3</p>` },
		],
		contentClass: "text-left",
		shouldTutNavShow: true,
	},
	{
		id: "conclusion",
		title: "Conclusion",
		contentText: [
			{ content: `<p>Content part 1</p>` },
			{ content: `<p>Content part 2</p>` },
			{ content: `<p>Content part 3</p>` },
		],
		contentClass: "text-left",
		shouldTutNavShow: false,
	},
];
