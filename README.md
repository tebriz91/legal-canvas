# Legal Canvas

Legal Canvas is a canvas-style editor designed for legal professionals to collaborate with AI agents and draft complex legal documents.

Start with a blank document or upload your existing legal drafts (e.g., contracts, briefs, memos) in various formats. Legal Canvas allows you to iterate on your current work, leveraging AI to refine, analyze, or expand upon it, rather than forcing you to start from scratch with a chat interface.

## Core features

- **Built-in Intelligent Memory**: Legal Canvas features a sophisticated memory system. It learns and remembers your drafting style, preferred clauses, key case facts, and client information, common clauses you use, ensuring personalized and consistent assistance across all your sessions. This is achieved using a [reflection agent](https://langchain-ai.github.io/langgraphjs/tutorials/reflection/reflection/) and a [shared memory store](https://langchain-ai.github.io/langgraphjs/concepts/memory/).
- **Custom Quick Actions**: Define your own reusable prompts for frequent legal tasks (e.g., "Draft standard NDA clause", "Check for contract ambiguities", "Format Bluebook citation"). These actions are tied to your user profile and persist across sessions, accessible with a single click.
- **Pre-built Quick Actions**: Access a suite of pre-built actions for common legal tasks like summarizing deposition transcripts, extracting key terms from contracts, reviewing documents for specific clauses, or generating draft sections based on prompts.
- **Document Versioning**: Every change is tracked. Easily navigate through the history of your legal documents, compare versions, and revert to previous states, ensuring a clear audit trail.
- **Live Markdown Rendering & Editing**: See how your formatted legal documents (using Markdown) will appear as you type, enhancing readability and presentation without switching views.

### Setup Prerequisites

Legal Canvas requires the following API keys and external services:

#### Package Manager

- [Yarn](https://yarnpkg.com/)

#### APIs

- [OpenAI API key](https://platform.openai.com/signup/)
- [Anthropic API key](https://console.anthropic.com/)
- (optional) [Google GenAI API key](https://aistudio.google.com/apikey)
- (optional) [Fireworks AI API key](https://fireworks.ai/login)
- (optional) [Groq AI API key](https://groq.com) - potentially for audio/video transcription of depositions/meetings
- (optional) [FireCrawl API key](https://firecrawl.dev) - potentially for legal research web scraping
- (optional) [ExaSearch API key](https://exa.ai) - potentially for advanced legal research searches

#### Authentication

- [Supabase](https://supabase.com/) account for authentication

#### LangGraph Server

- [LangGraph CLI](https://langchain-ai.github.io/langgraph/cloud/reference/cli/) for running the graph locally

#### LangSmith

- [LangSmith](https://smith.langchain.com/) for tracing & observability

### Installation

First, clone the repository:

Next, install the dependencies:

```bash
yarn install
```

After installing dependencies, copy the `.env.example` files in `apps/web` and `apps/agents` contents into `.env` and set the required values:

```bash
cd apps/web/
cp .env.example .env
```

```bash
cd apps/agents/
cp .env.example .env
```

Then, setup authentication with Supabase.

### Setup Authentication

After creating a Supabase account, visit your [dashboard](https://supabase.com/dashboard/projects) and create a new project.

Next, navigate to the `Project Settings` page inside your project, and then to the `API` tag. Copy the `Project URL`, and `anon public` project API key. Paste them into the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variables in the `.env` file.

After this, navigate to the `Authentication` page, and the `Providers` tab. Make sure `Email` is enabled (also ensure you've enabled `Confirm Email`). You may also enable `GitHub`, and/or `Google` if you'd like to use those for authentication. (see these pages for documentation on how to setup each provider: [GitHub](https://supabase.com/docs/guides/auth/social-login/auth-github), [Google](https://supabase.com/docs/guides/auth/social-login/auth-google))

#### Test authentication

To verify authentication works, run `yarn dev` and visit [localhost:3000](http://localhost:3000). This should redirect you to the login page. From here, you can either login with Google or GitHub, or if you did not configure these providers, navigate to the signup page and create a new account with an email and password. This should then redirect you to a confirmation page, and after confirming your email you should be redirected to the main Legal Canvas application.

### Setup LangGraph Server

The first step to running Legal Canvas locally is to build the application. This is because Legal Canvas uses a monorepo setup, and requires workspace dependencies to be build so other packages/apps can access them.

Run the following command from the root of the repository:

```bash
yarn build
```

Now we'll cover how to setup and run the LangGraph server locally.

Navigate to `apps/agents` and run `yarn dev` (this runs `npx @langchain/langgraph-cli dev --port 54367`).

```md
Ready!
- 🚀 API: http://localhost:54367
- 🎨 Studio UI: https://smith.langchain.com/studio?baseUrl=http://localhost:54367
```

After your LangGraph server is running, execute the following command inside `apps/web` to start the Legal Canvas frontend:

```bash
yarn dev
```

On initial load, compilation may take a little bit of time.

Then, open [localhost:3000](http://localhost:3000) with your browser and start interacting!
