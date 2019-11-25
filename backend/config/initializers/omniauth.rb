Rails.application.config.middleware.use OmniAuth::Builder do
    provider :facebook, ENV['APP_ID'], ENV['APP_SECRET'],
             :scope => 'public_profile, email', :display => 'popup'
  end