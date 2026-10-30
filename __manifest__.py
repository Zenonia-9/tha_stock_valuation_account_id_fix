{
    "name": "Inventory Valuation Account ID Fix",
    "version": "19.0.1.0.0",
    "category": "Inventory/Accounting",
    "summary": "Preserve account IDs on inventory valuation report lines",
    "depends": ["stock_account"],
    "assets": {
        "web.assets_backend": [
            "tha_stock_valuation_account_id_fix/static/src/js/valuation_account_id_patch.js",
        ],
    },
    "license": "LGPL-3",
    "installable": True,
    "application": False,
}
