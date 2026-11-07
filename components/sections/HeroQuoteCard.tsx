"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { Select } from "@/components/common/Select";
import { equipmentOptions } from "@/data/quote-options";
import { useQuickQuoteForm } from "@/hooks/useQuoteForm";

export function HeroQuoteCard() {
  const { form, onSubmit, status, resetStatus } = useQuickQuoteForm();
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <div className="rounded-sm border border-road bg-steel p-6 sm:p-8">
      <h2 className="font-heading text-2xl font-bold uppercase tracking-wide">Quick quote</h2>
      <p className="mt-1 text-sm text-concrete">Tell us the lane. We will send a rate.</p>

      <div aria-live="polite">
        {status === "success" ? (
          <div className="mt-6 rounded-sm border border-success p-4">
            <p className="flex items-center gap-2 font-semibold text-success">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              Request received
            </p>
            <p className="mt-2 text-concrete">
              A dispatcher will contact you shortly. For the full details form, scroll to the
              quote section below.
            </p>
            <Button variant="outline" className="mt-4" onClick={resetStatus}>
              New request
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
            <Input
              label="Pickup location"
              placeholder="City or zip"
              autoComplete="off"
              required
              error={errors.pickup?.message}
              {...register("pickup")}
            />
            <Input
              label="Drop-off location"
              placeholder="City or zip"
              autoComplete="off"
              required
              error={errors.dropoff?.message}
              {...register("dropoff")}
            />
            <Select
              label="Equipment type"
              options={equipmentOptions}
              required
              error={errors.equipment?.message}
              {...register("equipment")}
            />
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  Sending
                </>
              ) : (
                "Get my rate"
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
