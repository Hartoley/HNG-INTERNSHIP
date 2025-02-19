const IntegrationSpecSettings ={
  "data": {
    "date": {
      "created_at": "2025-02-18",
      "updated_at": "2025-02-D18"
    },
    "descriptions": {
      "app_description": "A brief description of the application functionality.",
      "app_logo": "https://i.pinimg.com/474x/d4/d1/d7/d4d1d797967d87e0cd7c7be96d54c121.jpg",
      "app_name": "Keena's HNG Telex integration",
      "app_url": "URL to the application or service.",
      "background_color": "#HEXCODE"
    },
    "integration_category": "Monitoring & Logging",
    "integration_type": "modifier",
    "is_active": false,
    "output": [
      {
        "label": "output_channel_1",
        "value": true
      },
      {
        "label": "output_channel_2",
        "value": false
      }
    ],
    "key_features": [
      "Feature description 1.",
      "Feature description 2.",
      "Feature description 3.",
      "Feature description 4."
    ],
    "permissions": {
      "monitoring_user": {
        "always_online": true,
        "display_name": "Performance Monitor"
      }
    },
    "settings": [
      {
        "label": "Gender",
        "type": "radio",
        "required": true,
        "default": "Female",
        "options": ["Male", "Female"]
      },
      {
        "label": "Key",
        "type": "text",
        "required": true,
        "default": "1234567890"
      },
      {
        "label": "Do you want to continue",
        "type": "checkbox",
        "required": true,
        "default": "Yes"
      },
      {
        "label": "Provide Speed",
        "type": "number",
        "required": true,
        "default": "1000"
      },
      {
        "label": "Sensitivity Level",
        "type": "dropdown",
        "required": true,
        "default": "Low",
        "options": ["High", "Low"]
      },
      {
        "label": "Alert Admin",
        "type": "multi-checkbox",
        "required": true,
        "default": "Super-Admin",
        "options": ["Super-Admin", "Admin", "Manager", "Developer"]
      }
    ],
    "target_url": "http://localhost:5010/webhook"
  }

}

module.exports = { IntegrationSpecSettings };