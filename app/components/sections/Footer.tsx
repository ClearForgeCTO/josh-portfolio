'use client'

import { SITE_INFO } from '@/app/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-l2 border-t border-glass-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-text-secondary text-sm">
              © {currentYear} {SITE_INFO.name}. All rights reserved.
            </p>
            <p className="text-text-tertiary text-xs mt-1">
              NMLS# {SITE_INFO.nmls} | {SITE_INFO.company} NMLS# {SITE_INFO.companyNMLS}
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-text-secondary text-sm">
              {SITE_INFO.location}
            </p>
            <p className="text-text-tertiary text-xs mt-1">
              Building relationships. Creating generational wealth.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-glass-border text-center">
          <p className="text-text-tertiary text-xs">
            Equal Housing Opportunity. This is not an offer to enter into an agreement.
            Not all customers will qualify. Information, rates and programs are subject to change without notice.
            All products are subject to credit and property approval. Other restrictions and limitations may apply.
          </p>
        </div>
      </div>
    </footer>
  )
}
