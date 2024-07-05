# Crawls [Demo🔗](https://nuprice-pricetracker.vercel.app/)

- **Crawls** is a state-of-the-art collaborative platform designed to replicate and enhance the core functionalities of **Miro**. Built with Next.js, React.js, and TypeScript, and styled with Tailwind CSS and Shadcn UI, Crawls offers a sleek and responsive user interface. It ensures secure user authentication via Clerk and robust data management with Convex database. Real-time collaboration is powered by Liveblocks, allowing users to seamlessly brainstorm, plan, and execute projects together. Crawls is your go-to solution for efficient and effective online teamwork.

## Images & Video

- ### Images

| Team Boards | Team Meeting |
| ----------- | ------------ |
| ![image1]() | ![image2]()  |

| Team Meeting | Organization |
| ------------ | ------------ |
| ![image3]()  | ![image4]()  |

| Team Meeting | Delete Board |
| ------------ | ------------ |
| ![image5]()  | ![image6]()  |

- ### Video

<!-- https://github.com/Sandip-Chavda/NuPrice_Price-Tracker/assets/140686165/b68bc859-0178-4685-862a-da97430f4d63 -->

## Key Features

- **Real-time Collaboration**: Seamlessly work with team members using Liveblocks for synchronized interactions.

- **Secure Authentication:** Protect user data with Clerk authentication.

- **Scalable Data Management:** Reliable storage with Convex database.

- **Infinite Canvas:** Brainstorm and plan ideas without limits.

- **Customizable Interface:** Sleek design with Tailwind CSS and Shadcn UI.

- **Embedded Media:** Easily add images, videos, and other media.

- **Sticky Notes and Comments:** Share feedback and ideas effectively.

- **Templates:** Use a variety of templates to streamline workflows.

- **Version History:** Track changes and revert to previous versions.

- **Device Compatibility:** Optimized for desktops, tablets, and smartphones.

## Tech-Stack & Tools

- **Brightdata for avoid IP blocking or device IP block**

- **Front-End:** React.js, Next.js, TypeScript

- **Styling:** Tailwind CSS, Shadcn UI

- **Back-End & DataBase:** Convex

- **Authentication:** Clerk

- **Real-time Collaboration:** Liveblocks

- **Tools:** VS Code, Chrome

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

```bash

- **`NODE_ENV = development`** `in development mode`

- `**Convex_DEPLOY_KEY only needed when deploy website not need in env.local file which you will get from convex production**`

- **`CONVEX_DEPLOY_KEY =`**

- **`CONVEX_DEPLOYMENT = `**

- **`NEXT_PUBLIC_CONVEX_URL = `**

- **`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = `**

- **`CLERK_SECRET_KEY = `**

- **`LIVEBLOCKS_SECRET_KEY = `**

```

## Run Locally

- **Clone the project**

```bash
  git clone https://github.com/Sandip-Chavda/Crawls.ai.git
```

- **Install dependencies**

```bash
  npm install
```

- **Start the server** **`Both started with one command`**

```bash
  npm run dev
```

- Access the Application: Open your web browser and visit **`http://localhost:3000`** to access the NuPrice - Price Tracker.

## Deploy on Vercel

- The easiest way to deploy your Next.js app is to use the **[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)** from the creators of Next.js.

- Check out our **[Next.js deployment documentation](https://nextjs.org/docs/deployment)** for more details.

## Project Tutorial ✨⭐

- **[Code With Antonio](https://www.youtube.com/watch?v=ADJKbuayubE&pp=ygUKbWlybyBjbG9uZQ%3D%3D)**

## Lern More

- _Refer this documnetation for the good understanding of the technologies used in the project._

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

- **[LiveBlocks](https://liveblocks.io/docs)** We are using LiveBlocks.io for real time experience in this app so visit this site and learn more about it and other features also.

- **[Convex DataBase](https://docs.convex.dev/quickstart/nextjs)** visit for the better understanding of the Convex.

- **[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)** visit for the better understanding of State management.

- **[Tailwind CSS](https://tailwindcss.com/docs/installation)** visit for the better understanding of the styling and customize your website with this.

- **[shadcn/ui](https://ui.shadcn.com/docs/installation/next)** Follow the link and set up shadcn/ui for next.js application and more.

## License

[MIT](https://choosealicense.com/licenses/mit/)
