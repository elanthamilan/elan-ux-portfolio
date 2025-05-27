import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Users, Calendar, Target } from 'lucide-react';
import { Button } from '@/components/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/components/ui/card';
import { Badge } from '@/components/components/ui/badge';
import OptimizedImage from '@/components/ui/OptimizedImage';
import ZoomableImage from '@/components/ui/ZoomableImage';

const CaseStudyCampusHiring = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const features = [
    {
      title: 'Streamlined Application Process',
      description: 'Simplified the application process, making it easier for students to apply.',
      icon: Users,
    },
    {
      title: 'Automated Scheduling',
      description: 'Automated interview scheduling, reducing manual effort and time.',
      icon: Calendar,
    },
    {
      title: 'Targeted Candidate Matching',
      description: 'Improved candidate matching based on skills and preferences.',
      icon: Target,
    },
  ];

  return (
    <motion.div
      className="container mx-auto py-12 px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header variants={itemVariants} className="mb-8">
        <Button variant="ghost" className="mb-4" asChild>
          <a href="/#work" className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" /> Back to Work
          </a>
        </Button>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Campus Hiring Platform
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          A platform to streamline the campus hiring process for companies and students.
        </p>
        <div className="mt-4">
          <Badge className="mr-2">React</Badge>
          <Badge className="mr-2">TypeScript</Badge>
          <Badge className="mr-2">Node.js</Badge>
          <Badge className="mr-2">PostgreSQL</Badge>
        </div>
      </motion.header>

      <motion.section variants={itemVariants} className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              The Campus Hiring Platform was designed to modernize and simplify the way companies
              hire students from universities. The platform provides tools for companies to post
              jobs, review applications, schedule interviews, and manage offers. Students can
              create profiles, search for jobs, apply online, and track their application status.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <feature.icon className="w-5 h-5 mr-2" /> {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ZoomableImage
              src="/images/campus-hiring-1.png"
              alt="Campus Hiring Platform - Job Listings"
              className="rounded-md shadow-md"
            />
            <p className="text-sm text-gray-500 mt-2">Job Listings</p>
          </div>
          <div>
            <ZoomableImage
              src="/images/campus-hiring-2.png"
              alt="Campus Hiring Platform - Application Dashboard"
              className="rounded-md shadow-md"
            />
            <p className="text-sm text-gray-500 mt-2">Application Dashboard</p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Links
        </h2>
        <div className="flex gap-4">
          <Button asChild>
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://your-live-demo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Live Demo
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CaseStudyCampusHiring;
