from django.urls import path
from home import views

urlpatterns = [
    path("", views.home, name="home"),
     path('login/', views.UserLoginView.as_view(), name='login'),
    path('logout/', views.UserLogoutView.as_view(), name='logout'),

]