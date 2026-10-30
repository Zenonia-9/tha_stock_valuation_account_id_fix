/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { StockValuationReportController } from "@stock_account/stock_valuation/controller";

patch(StockValuationReportController.prototype, {
    async loadReportData(...args) {
        await super.loadReportData(...args);

        for (const sectionName of ["initial_balance", "ending_stock"]) {
            const section = this.data[sectionName];
            const normalizedLines = section.lines || [];
            section.lines = Object.entries(section.lines_by_account_id || {}).map(
                ([accountId], index) => ({
                    ...(normalizedLines[index] || {}),
                    account_id: Number(accountId),
                })
            );
        }
    },
});
