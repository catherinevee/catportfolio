
import { ArrowLeft, Server, Cloud, Shield, Gauge } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CatTerraform = () => {
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
              <Cloud className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-4">CatTerraform</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Infrastructure as Code with a feline twist - making cloud deployment as smooth as a cat's purr
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Server className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg text-card-foreground">Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Automated infrastructure provisioning with Terraform and modern DevOps practices
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg text-card-foreground">Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Built-in security best practices and compliance standards for enterprise-grade deployments
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Gauge className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg text-card-foreground">Scalable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Auto-scaling capabilities and resource optimization for efficient cloud resource management
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CatTerraform brings together the power of Infrastructure as Code with an intuitive, 
                cat-themed interface that makes cloud infrastructure management accessible and enjoyable. 
                This project showcases advanced Terraform configurations and cloud architecture patterns.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The platform supports multi-cloud deployments, automated scaling, and comprehensive monitoring, 
                all wrapped in a delightful user experience that takes the complexity out of infrastructure management.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CatTerraform;
