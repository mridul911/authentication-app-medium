from django.urls import path,include
from .views import(
	registration_view,
	ObtainAuthTokenView,
	Logout,
)
from account import views
from rest_framework.authtoken.views import obtain_auth_token

app_name = 'account'

urlpatterns = [
 	path('login', ObtainAuthTokenView.as_view(), name="login"), 
	path('register', registration_view, name="register"),
	path('logout/',  Logout.as_view(), name="logout"),
]	