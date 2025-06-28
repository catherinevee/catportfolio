
import { ArrowLeft, Cat, Sparkles, Code, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CatPrompt = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 hover:bg-accent/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
              <Cat className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-4">CatPrompt</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              An innovative cat-themed prompt generation tool that brings creativity and whimsy to your AI interactions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg text-card-foreground">AI-Powered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Leverages advanced AI to generate creative and engaging prompts with a feline twist
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg text-card-foreground">Clean Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Built with modern web technologies and best practices for optimal performance
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg text-card-foreground">Fast & Fun</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Lightning-fast responses with a delightful user experience that makes prompting enjoyable
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CatPrompt is a unique take on AI prompt generation that combines the power of modern language models 
                with the universal appeal of cats. This project demonstrates advanced prompt engineering techniques 
                while maintaining a playful and engaging user interface.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The application features real-time prompt generation, customizable parameters, and a delightful 
                cat-themed design that makes AI interaction more approachable and fun for users of all backgrounds.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CatPrompt;
