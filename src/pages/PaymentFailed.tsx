import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentFailed = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg animate-fade-in">
          {/* Error Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center animate-scale-in">
              <div className="w-14 h-14 rounded-full bg-destructive flex items-center justify-center">
                <X className="w-8 h-8 text-white" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-foreground text-center mb-3">
            Оплата не удалась
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-center mb-8">
            Попробуйте повторить оплату или свяжитесь с поддержкой в боте.
          </p>

          {/* Button */}
          <Button asChild className="w-full h-12 text-base font-medium">
            <a href="https://t.me/ferusqvpn_bot" target="_blank" rel="noopener noreferrer">
              Вернуться в бот
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
