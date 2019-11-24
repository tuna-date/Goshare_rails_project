Rails.application.config.middleware.use OmniAuth::Builder do
    provider :facebook, 'APP_ID', 'APP_SECRET',
             :scope => 'public_profile, email', :display => 'popup'
  end