require 'spec_helper'

describe "Static pages" do 
	let (:base_title) {"Mercadito"}

	describe "Index page" do
		it "should have the content 'Home'" do
			visit '/static_pages/index'
			page.should have_content 'Home'
		end

		it "should have title 'Home'" do
			visit '/static_pages/index'
			page.should have_selector 'title', :text => "#{base_title} | Home"
		end

	end

	describe "Privacy page" do
		it "should have the content 'Privacy'" do
			visit '/static_pages/privacy'
			page.should have_content 'Privacy'
		end

		it "should have title 'Privacy'" do
			visit '/static_pages/privacy'
			page.should have_selector 'title', :text => "#{base_title} | Privacy"
		end
	end

	describe "Help page" do
		it "should have the content 'Help'" do
			visit '/static_pages/help'
			page.should have_content 'Help'
		end

		it "should have title 'Help'" do
			visit '/static_pages/help'
			page.should have_selector 'title', :text => "#{base_title} | Help"
		end
	end

end