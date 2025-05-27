import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Users, Calendar, Target } from 'lucide-react';
import { Button } from '@/components/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/components/ui/card';
import { Badge } from '@/components/components/ui/badge';
import OptimizedImage from '@/components/ui/OptimizedImage';
import ZoomableImage from '@/components/ui/ZoomableImage';

const CaseStudyStudentPlanner = () => {
  return (
    <motion.main
      className="container mx-auto py-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Button asChild variant="ghost" className="mb-8 w-fit rounded-full">
        <a href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </a>
      </Button>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Student Planner - Streamlining Academic Success
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <p className="text-sm font-medium leading-none">Team Size</p>
              <p className="text-sm text-muted-foreground">Solo Project</p>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">Duration</p>
              <p className="text-sm text-muted-foreground">3 Months</p>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">My Role</p>
              <p className="text-sm text-muted-foreground">
                UI/UX Design & Development
              </p>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">Platform</p>
              <p className="text-sm text-muted-foreground">Web Application</p>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">Technologies</p>
              <div className="flex flex-wrap gap-1">
                <Badge>React</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Framer Motion</Badge>
                <Badge>Supabase</Badge>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">
                Project Status
              </p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-muted-foreground">
          The Student Planner is a web application designed to help students
          manage their academic life efficiently. It provides tools for
          scheduling, task management, and progress tracking, all in one
          integrated platform.
        </p>
        <OptimizedImage
          src="/images/student-planner/dashboard.png"
          alt="Student Planner Dashboard"
          width={1200}
          height={600}
          className="rounded-md mt-4"
        />
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Dashboard View
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>
            <b>Interactive Calendar:</b> Schedule classes, assignments, and
            other important events.
          </li>
          <li>
            <b>Task Management:</b> Create, assign, and track tasks with
            deadlines and priorities.
          </li>
          <li>
            <b>Progress Tracking:</b> Visualize your progress with charts and
            graphs.
          </li>
          <li>
            <b>Notifications:</b> Receive reminders for upcoming deadlines and
            events.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Design Process</h2>
        <p className="text-muted-foreground">
          The design process focused on creating a clean, intuitive interface
          that is easy to navigate. User feedback was gathered throughout the
          design process to ensure the application meets the needs of students.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <ZoomableImage
              src="/images/student-planner/calendar.png"
              alt="Calendar Design"
              width={600}
              height={400}
              className="rounded-md"
            />
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Calendar
            </p>
          </div>
          <div>
            <ZoomableImage
              src="/images/student-planner/tasks.png"
              alt="Task Management Design"
              width={600}
              height={400}
              className="rounded-md"
            />
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Tasks
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Development</h2>
        <p className="text-muted-foreground">
          The application was developed using React, Tailwind CSS, and Framer
          Motion for smooth animations. Supabase was used for data storage and
          user authentication.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          View the Live Project
        </h2>
        <Button asChild className="rounded-full">
          <a
            href="https://student-planner-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>
    </motion.main>
  );
};

export default CaseStudyStudentPlanner;
