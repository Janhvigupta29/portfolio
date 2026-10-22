export interface Project {
  id: string;
  title: string;
  category: string;
  categoryType: 'engineering' | 'execution' | 'both';
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  role: string;
  approach: string;
  challenges: string;
  tools: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'concept';
}

const projects: Project[] = [
  {
    id: 'cicd-kubernetes',
    title: 'CI/CD Pipeline with Kubernetes',
    category: 'DevOps Engineering',
    categoryType: 'engineering',
    shortDescription:
      'A containerized CI/CD pipeline using Kubernetes for automated build, test, and deployment workflows.',
    fullDescription:
      'Designed and implemented a CI/CD pipeline integrating container orchestration with automated testing gates and rollback strategies. The pipeline reduces manual deployment steps and improves release consistency.',
    tags: ['Kubernetes', 'Docker', 'CI/CD', 'YAML', 'Automation'],
    role: 'Infrastructure & Automation',
    approach:
      'Mapped the existing deployment process, identified bottlenecks, containerised services, and configured pipeline stages with health checks and rollback triggers.',
    challenges:
      'Coordinating environment parity between development and production, and designing graceful rollback logic without service interruption.',
    tools: ['Kubernetes', 'Docker', 'GitHub Actions', 'YAML', 'Linux', 'Shell scripting'],
    featured: true,
    status: 'in-progress',
  },
  {
    id: 'agentic-trade-compliance',
    title: 'Agentic Trade Compliance Auditor',
    category: 'AI & Automation',
    categoryType: 'both',
    shortDescription:
      'An AI-powered agent that automates trade compliance checks and surfaces regulatory risks from documentation.',
    fullDescription:
      'An agentic system that processes trade documents, cross-references regulatory requirements, and flags compliance gaps — reducing manual review time in trade operations.',
    tags: ['AI Agents', 'Python', 'LLM', 'Automation', 'Compliance'],
    role: 'Design, development, and prompt engineering',
    approach:
      'Defined the compliance workflow, designed an agent loop for document parsing and rule matching, and structured outputs for actionable review.',
    challenges:
      'Managing ambiguity in regulatory language and ensuring the agent surfaces meaningful risk signals rather than noise.',
    tools: ['Python', 'LLM APIs', 'Document parsing', 'Prompt engineering'],
    featured: true,
    status: 'in-progress',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation & Testing',
    category: 'Automation & QA',
    categoryType: 'engineering',
    shortDescription:
      'Automated repetitive operational workflows and built a testing layer to catch regressions early in the development cycle.',
    fullDescription:
      'Identified manual, error-prone processes and replaced them with scripted automation. Added a structured testing approach to validate behaviour across workflow stages.',
    tags: ['Python', 'Shell', 'Testing', 'Automation', 'QA'],
    role: 'Automation engineering and test design',
    approach:
      'Mapped existing workflows, wrote automation scripts for high-frequency tasks, and established test cases for each workflow stage.',
    challenges:
      'Accounting for edge cases in existing manual processes and ensuring automation did not introduce new failure points.',
    tools: ['Python', 'Shell scripting', 'Testing frameworks', 'Linux'],
    featured: true,
    status: 'in-progress',
  },
  {
    id: 'cci-india-coordination',
    title: 'Project Coordination at CCI India',
    category: 'Project Execution',
    categoryType: 'execution',
    shortDescription:
      'Hands-on coordination experience at CCI India — managing tasks, tracking deliverables, and supporting cross-functional communication.',
    fullDescription:
      'Contributed to project coordination activities at CCI India, including task tracking, stakeholder communication, documentation, and organising deliverables across teams.',
    tags: ['Project Management', 'Coordination', 'Documentation', 'Communication'],
    role: 'Project Coordination',
    approach:
      'Maintained task visibility using structured tracking, communicated progress to stakeholders, and ensured documentation stayed current.',
    challenges:
      'Keeping cross-functional teams aligned on timelines and priorities in a fast-moving environment.',
    tools: ['Notion', 'Documentation tools', 'Spreadsheets', 'Communication platforms'],
    featured: true,
    status: 'completed',
  },
  {
    id: 'cloud-native-microservices',
    title: 'Cloud-Native Microservices Platform',
    category: 'Cloud Engineering',
    categoryType: 'engineering',
    shortDescription:
      'Exploration of microservices architecture on cloud infrastructure, focusing on service boundaries, deployment patterns, and observability.',
    fullDescription:
      'Studied and applied cloud-native patterns for decomposing applications into independently deployable services, with attention to infrastructure-as-code and monitoring.',
    tags: ['Cloud', 'Microservices', 'Infrastructure', 'DevOps', 'IaC'],
    role: 'Research, design, and prototyping',
    approach:
      'Analysed service decomposition strategies, set up infrastructure definitions, and explored monitoring for distributed systems.',
    challenges:
      'Understanding distributed system trade-offs, particularly around service discovery, latency, and failure isolation.',
    tools: ['Cloud platforms', 'Infrastructure as Code', 'Docker', 'Monitoring tools'],
    featured: false,
    status: 'in-progress',
  },
];

export default projects;
