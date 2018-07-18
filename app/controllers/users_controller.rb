class UsersController < ApplicationController
  def main
    @users=User.all
    render(:template=>"users/main")
  end

  def webservice
    fname=params[:prenom]
    lname=params[:nom]
    age=params[:age]
    user=User.new
    user.fname=fname
    user.lname=lname
    user.age=age

    if(user.save)
      @users=User.all
      respond_to do |format|
        format.html
        format.json { render:json=>@users}
      end
    end
    
  end

  def search
    search=params[:chaine]
    @users=User.where("fname LIKE :search OR lname LIKE :search",search:"%#{search}%")
      respond_to do |format|
        format.html
        format.json { render:json=>@users}
      end
  end
end
