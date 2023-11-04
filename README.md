# InventoryApp


The Inventory Management Application is a comprehensive solution for tracking and managing inventory, including an inventory dashboard, department pages, product lists, and product management. This README provides an overview of the key features of the application.

## Features

### Inventory Dashboard

- The dashboard provides a quick overview of inventory levels, including:
  - Total Stock: The total quantity of all items in the inventory.
  - Total Delivered: The total number of items delivered from the entire inventory.
  - Low Stock Items: Items with a quantity less than or equal to 10.
- Dashboard cards display this data without user interaction.

### Departments Page

- Users can explore different inventory departments within the business.
- Clicking on department cards navigates users to specific product lists within each department.
- The available departments include:
  - Kitchen
  - Clothing
  - Toys

### Product List Page

- This page lists products within a selected department.
- Users can filter and sort products based on various attributes.
- Columns include department, product name, description, price, stock (quantity), SKU (stocking unit), supplier name, items delivered, and item image URL.
- Filtering options:
  - Filter by department using a dropdown menu (All departments, kitchen, clothing, toys).
  - Use a checkbox to filter items with low stock (quantity less than or equal to 10).
- Sorting options:
  - Sort by Name, Price, and Stock in ascending order using a dropdown.

### Product Management

- Users can add new products to the inventory by clicking the 'New' button on the product list page.
- Attributes for new products include department, product name, description, price, stock (quantity), SKU (stocking unit), supplier name, items delivered (initially set to 0), and item image URL.
- Newly added items persist in the product listing, ensuring data persistence on page reload.

### Detailed Product Page

- Clicking on a product from the list navigates users to a detailed product page.
- The detailed product page provides comprehensive information about the selected product, including its attributes, current stock level, and supplier name.
- Users can access detailed product information, aiding in informed decision-making.

