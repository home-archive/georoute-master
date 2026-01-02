import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
const PaymentAccept = () => {
  return <div className="min-h-screen flex items-center justify-center p-4 bg-[#0f1729]">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg animate-fade-in">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center animate-scale-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center">
                <Check className="w-8 h-8 text-white" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-foreground text-center mb-3">
            Оплата прошла успешно!
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-center mb-8">
            Ваша подписка активирована. Вернитесь в бот для получения конфигурации подключения.
          </p>

          {/* Button */}
          <Button asChild className="w-full h-12 text-base font-medium">
            <a href="https://t.me/ferusqvpn_bot" target="_blank" rel="noopener noreferrer">
              Вернуться в бот
            </a>
          </Button>
        </div>
      </div>
    </div>;
};
export default PaymentAccept;